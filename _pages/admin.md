---
layout: single
title: Instructor Dashboard
permalink: /admin/
author_profile: false
---

<div id="admin-dashboard">
  <h2>Student Activity Dashboard</h2>
  
  <div id="admin-login" style="display: block;">
    <div class="notice--warning">
      <h4>Instructor Access Required</h4>
      <p>This dashboard is for instructor use only. Please sign in with your instructor account.</p>
    </div>
    
    <div style="max-width: 300px; margin: 2rem 0;">
      <input type="email" id="admin-email" placeholder="Instructor Email" style="width: 100%; padding: 0.5rem; margin: 0.5rem 0;">
      <input type="password" id="admin-password" placeholder="Password" style="width: 100%; padding: 0.5rem; margin: 0.5rem 0;">
      <button id="admin-signin" style="width: 100%; padding: 0.75rem; background: #4285f4; color: white; border: none; border-radius: 4px; cursor: pointer;">Sign In</button>
      <div id="admin-error" style="color: #dc3545; font-size: 0.9rem; margin-top: 0.5rem;"></div>
    </div>
  </div>
  
  <div id="admin-content" style="display: none;">
    
    <div style="margin: 2rem 0;">
      <button id="refresh-data" style="padding: 0.5rem 1rem; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 1rem;">Refresh Data</button>
      <button id="admin-logout" style="padding: 0.5rem 1rem; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">Sign Out</button>
    </div>
    
    <!-- Summary Statistics -->
    <div class="notice--info">
      <h4>Activity Summary</h4>
      <div id="activity-summary">Loading...</div>
    </div>
    
    <!-- Recent Activity -->
    <div style="margin: 2rem 0;">
      <h3>Recent Student Activity</h3>
      <div id="recent-activity">Loading recent activity...</div>
    </div>
    
    <!-- Student List -->
    <div style="margin: 2rem 0;">
      <h3>Student Logins</h3>
      <div id="student-list">Loading student data...</div>
    </div>
    
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  
  // Wait for Firebase to be ready
  const waitForFirebase = setInterval(() => {
    if (window.firebaseAuth) {
      clearInterval(waitForFirebase);
      initAdminDashboard();
    }
  }, 100);
  
  function initAdminDashboard() {
    const adminLoginDiv = document.getElementById('admin-login');
    const adminContentDiv = document.getElementById('admin-content');
    const adminEmailInput = document.getElementById('admin-email');
    const adminPasswordInput = document.getElementById('admin-password');
    const adminSigninBtn = document.getElementById('admin-signin');
    const adminLogoutBtn = document.getElementById('admin-logout');
    const adminErrorDiv = document.getElementById('admin-error');
    const refreshBtn = document.getElementById('refresh-data');
    
    // Check if user is already signed in
    window.firebaseAuth.onAuthStateChanged((user) => {
      checkPageAccess(); // Always check access first
      
      if (user && isInstructor(user)) {
        showAdminContent();
        loadDashboardData();
      } else if (user && !isInstructor(user)) {
        // Student logged in but not instructor
        alert('Access denied. This page is for instructors only.');
        window.location.href = '/exp-jekyll-with-firebase-v01/';
      } else {
        showLoginForm();
      }
    });
    
    // Instructor-only access control
    function isInstructor(user) {
      const instructorEmails = ['lgoldford@bates.edu']; // Add instructor emails here
      return instructorEmails.includes(user.email);
    }
    
    // Check if current page should be restricted
    function checkPageAccess() {
      const user = window.firebaseAuth.getCurrentUser();
      const isAdminPage = window.location.pathname.includes('/admin');
      
      if (isAdminPage && user && !isInstructor(user)) {
        // Student trying to access admin page - redirect
        alert('Access denied. This page is for instructors only.');
        window.location.href = '/exp-jekyll-with-firebase-v01/';
        return;
      }
    }
    
    function showLoginForm() {
      adminLoginDiv.style.display = 'block';
      adminContentDiv.style.display = 'none';
    }
    
    function showAdminContent() {
      adminLoginDiv.style.display = 'none';
      adminContentDiv.style.display = 'block';
    }
    
    // Admin sign in
    adminSigninBtn.addEventListener('click', async function() {
      const email = adminEmailInput.value.trim();
      const password = adminPasswordInput.value.trim();
      
      if (!email || !password) {
        adminErrorDiv.textContent = 'Please enter email and password.';
        return;
      }
      
      try {
        adminSigninBtn.textContent = 'Signing in...';
        adminSigninBtn.disabled = true;
        adminErrorDiv.textContent = '';
        
        const user = await window.firebaseAuth.signInEmail(email, password);
        
        if (!isInstructor(user)) {
          adminErrorDiv.textContent = 'Access denied. Instructor account required.';
          await window.firebaseAuth.signOut();
          return;
        }
        
      } catch (error) {
        console.error('Admin signin error:', error);
        adminErrorDiv.textContent = 'Sign in failed. Please check your credentials.';
      } finally {
        adminSigninBtn.textContent = 'Sign In';
        adminSigninBtn.disabled = false;
      }
    });
    
    // Admin sign out
    adminLogoutBtn.addEventListener('click', async function() {
      await window.firebaseAuth.signOut();
    });
    
    // Refresh data
    refreshBtn.addEventListener('click', function() {
      loadDashboardData();
    });
    
    // Load dashboard data
    async function loadDashboardData() {
      try {
        // Note: This requires Firebase SDK to be loaded with Firestore
        const { getFirestore, collection, query, orderBy, limit, getDocs } = await import('https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js');
        const db = getFirestore();
        
        // Get ALL activity for complete session analysis
        const allActivityQuery = query(
          collection(db, 'user_activity'),
          orderBy('timestamp', 'desc')
        );
        const allActivitySnapshot = await getDocs(allActivityQuery);
        
        // Use complete data for session tracking
        displayRecentActivity(allActivitySnapshot);
        displayActivitySummary(allActivitySnapshot);
        
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        document.getElementById('recent-activity').innerHTML = '<p style="color: #dc3545;">Error loading data. Make sure Firestore is properly configured.</p>';
      }
    }
    
    function displayRecentActivity(snapshot) {
      const container = document.getElementById('recent-activity');
      
      if (snapshot.empty) {
        container.innerHTML = '<p>No activity recorded yet.</p>';
        return;
      }
      
      // Process data into user sessions
      const userData = processUserSessions(snapshot);
      
      let html = '<div style="margin-bottom: 2rem;">';
      
      // Student selector
      html += '<div style="margin-bottom: 1rem;">';
      html += '<label for="student-filter" style="margin-right: 1rem;">Filter by student:</label>';
      html += '<select id="student-filter" style="padding: 0.5rem;">';
      html += '<option value="all">All Students</option>';
      
      Object.keys(userData).forEach(email => {
        html += `<option value="${email}">${email}</option>`;
      });
      
      html += '</select></div>';
      
      // Date range selector
      html += '<div style="margin-bottom: 1rem;">';
      html += '<label for="date-start" style="margin-right: 1rem;">Date range:</label>';
      html += '<input type="date" id="date-start" style="padding: 0.5rem; margin-right: 0.5rem;">';
      html += '<span style="margin: 0 0.5rem;">to</span>';
      html += '<input type="date" id="date-end" style="padding: 0.5rem; margin-right: 1rem;">';
      html += '<button id="apply-date-filter" style="padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Apply Filter</button>';
      html += '<button id="clear-date-filter" style="padding: 0.5rem 1rem; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; margin-left: 0.5rem;">Clear</button>';
      html += '</div>';
      
      html += '</div>';
      
      // Summary table
      html += '<h4>Student Sessions Summary</h4>';
      html += '<table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">';
      html += '<tr style="background: #f8f9fa;"><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Student</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Total Sessions</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Total Time</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Last Login</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Pages Viewed</th></tr>';
      
      Object.entries(userData).forEach(([email, data]) => {
        const totalMinutes = Math.round(data.totalTime / 60000); // Convert ms to minutes
        html += `<tr>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${email}</td>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${data.sessions.length}</td>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${totalMinutes} minutes</td>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${data.lastLogin}</td>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${data.pageViews}</td>
        </tr>`;
      });
      
      html += '</table>';
      
      // Daily breakdown table (will be populated by filtering)
      html += '<h4>Daily Activity Breakdown</h4>';
      html += '<div id="daily-breakdown">Select a student and date range to see daily breakdown</div>';
      
      // Detailed activity (initially hidden)
      html += '<div id="detailed-activity" style="display: none;">';
      html += '<h4>Detailed Activity Log</h4>';
      html += '<table style="width: 100%; border-collapse: collapse;">';
      html += '<tr style="background: #f8f9fa;"><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Student</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Action</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Page</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Time</th></tr>';
      
      // Sort activities by timestamp (newest first)
      const activities = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        const timestamp = data.timestamp ? data.timestamp.toDate() : new Date();
        activities.push({ ...data, timestamp });
      });
      
      activities.sort((a, b) => b.timestamp - a.timestamp);
      
      // Show ALL activities in detailed view (will be filtered by date/student later)
      activities.forEach((data) => {
        html += `<tr class="activity-row" data-email="${data.email}" data-date="${data.timestamp.toDateString()}">
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${data.email || 'Unknown'}</td>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${data.action || 'Unknown'}</td>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${data.page || '/'}</td>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${data.timestamp.toLocaleString()}</td>
        </tr>`;
      });
      
      html += '</table></div>';
      
      // Toggle button for detailed view
      html += '<button id="toggle-detailed" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Show Detailed Log</button>';
      
      container.innerHTML = html;
      
      // Add event listeners and pass original data for advanced filtering
      setupActivityFilters(snapshot);
    }
    
    function processUserSessions(snapshot) {
      const userData = {};
      const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds
      
      // First, collect all activities and sort by timestamp
      const activities = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        const timestamp = data.timestamp ? data.timestamp.toDate() : new Date();
        activities.push({ ...data, timestamp });
      });
      
      // Sort activities by email, then by timestamp
      activities.sort((a, b) => {
        if (a.email !== b.email) return a.email.localeCompare(b.email);
        return a.timestamp - b.timestamp;
      });
      
      // Process activities into sessions
      activities.forEach((data) => {
        const email = data.email;
        const timestamp = data.timestamp;
        
        if (!userData[email]) {
          userData[email] = {
            sessions: [],
            totalTime: 0,
            lastLogin: null,
            pageViews: 0
          };
        }
        
        const user = userData[email];
        
        if (data.action === 'page_view') {
          user.pageViews++;
        }
        
        // Session logic: Start new session if no sessions exist, last session ended, or there's a big time gap
        let currentSession = user.sessions.length > 0 ? user.sessions[user.sessions.length - 1] : null;
        
        if (data.action === 'login') {
          // Always start a new session on explicit login
          user.sessions.push({
            loginTime: timestamp,
            logoutTime: null,
            duration: 0,
            lastActivity: timestamp
          });
          user.lastLogin = timestamp.toLocaleString();
          currentSession = user.sessions[user.sessions.length - 1];
        } else if (data.action === 'logout' && currentSession && !currentSession.logoutTime) {
          // End current session on logout
          currentSession.logoutTime = timestamp;
          currentSession.duration = timestamp - currentSession.loginTime;
          user.totalTime += currentSession.duration;
        } else if (data.action === 'page_view') {
          // Check if we need a new session (no session exists, last session ended, or time gap too large)
          if (!currentSession || 
              currentSession.logoutTime || 
              (timestamp - currentSession.lastActivity > SESSION_TIMEOUT)) {
            // Start new session
            user.sessions.push({
              loginTime: timestamp,
              logoutTime: null,
              duration: 0,
              lastActivity: timestamp
            });
            if (!user.lastLogin) user.lastLogin = timestamp.toLocaleString();
            currentSession = user.sessions[user.sessions.length - 1];
          } else {
            // Continue current session
            currentSession.lastActivity = timestamp;
            currentSession.duration = timestamp - currentSession.loginTime;
          }
        }
      });
      
      // Calculate total time for each user
      Object.values(userData).forEach(user => {
        user.totalTime = user.sessions.reduce((total, session) => total + session.duration, 0);
      });
      
      return userData;
    }
    
    function calculateStudentDailyBreakdown(studentEmail, snapshot, startDate = null, endDate = null) {
      console.log('calculateStudentDailyBreakdown called with:', studentEmail, startDate, endDate);
      
      if (!studentEmail || studentEmail === 'all') {
        return '<p style="color: #666;">Select a specific student to see daily breakdown</p>';
      }
      
      const dailyData = {};
      let processedCount = 0;
      
      // Filter activities for the selected student and date range
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.email !== studentEmail) return;
        
        processedCount++;
        
        const timestamp = data.timestamp ? 
          (typeof data.timestamp.toDate === 'function' ? data.timestamp.toDate() : new Date(data.timestamp)) : 
          new Date();
        
        // Apply date filtering if specified
        if (startDate && timestamp < startDate) return;
        if (endDate && timestamp > endDate) return;
        
        const dateKey = timestamp.toDateString(); // "Mon Dec 30 2024" format
        
        if (!dailyData[dateKey]) {
          dailyData[dateKey] = {
            date: dateKey,
            activities: [],
            totalMinutes: 0,
            pageViews: 0,
            logins: 0
          };
        }
        
        const day = dailyData[dateKey];
        // Store the activity with the converted timestamp
        day.activities.push({
          ...data,
          timestamp: timestamp
        });
        
        if (data.action === 'page_view') day.pageViews++;
        if (data.action === 'login') day.logins++;
      });
      
      // Calculate session durations for each day using filtered data
      const filteredActivities = [];
      Object.values(dailyData).forEach(day => {
        filteredActivities.push(...day.activities);
      });
      
      // Sort activities by timestamp for proper session processing
      filteredActivities.sort((a, b) => {
        const aTime = a.timestamp instanceof Date ? a.timestamp : new Date(a.timestamp);
        const bTime = b.timestamp instanceof Date ? b.timestamp : new Date(b.timestamp);
        return aTime - bTime;
      });
      
      console.log('Filtered activities for session processing:', filteredActivities.length);
      
      // Create filtered snapshot for session processing with proper timestamp format
      const filteredSnapshot = {
        empty: filteredActivities.length === 0,
        forEach: function(callback) {
          filteredActivities.forEach((data, index) => {
            callback({ 
              data: () => ({ 
                ...data, 
                timestamp: {
                  toDate: () => data.timestamp instanceof Date ? data.timestamp : new Date(data.timestamp)
                }
              }) 
            }, index);
          });
        }
      };
      
      // Process sessions for this student only
      const studentData = processUserSessions(filteredSnapshot);
      const studentSessions = studentData[studentEmail]?.sessions || [];
      
      console.log('Generated sessions:', studentSessions);
      
      // Calculate minutes per day from sessions
      studentSessions.forEach(session => {
        if (session.loginTime && session.duration) {
          const dateKey = session.loginTime.toDateString();
          if (dailyData[dateKey]) {
            dailyData[dateKey].totalMinutes += session.duration / (1000 * 60); // Convert ms to minutes
            console.log('Added', session.duration / (1000 * 60), 'minutes to', dateKey);
          }
        }
      });
      
      console.log('Processed activities for student:', processedCount);
      console.log('Daily data:', dailyData);
      
      // Generate HTML table
      if (Object.keys(dailyData).length === 0) {
        return '<p style="color: #666;">No activity found for selected student and date range</p>';
      }
      
      let html = '<table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">';
      html += '<tr style="background: #f8f9fa;"><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Date</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Minutes Active</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Page Views</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Sessions</th></tr>';
      
      // Sort by date (newest first)
      const sortedDates = Object.keys(dailyData).sort((a, b) => new Date(b) - new Date(a));
      
      sortedDates.forEach(dateKey => {
        const day = dailyData[dateKey];
        const sessionsForDay = studentSessions.filter(s => s.loginTime && s.loginTime.toDateString() === dateKey).length;
        
        html += `<tr>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${dateKey}</td>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${Math.round(day.totalMinutes)} minutes</td>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${day.pageViews}</td>
          <td style="padding: 0.5rem; border: 1px solid #ddd;">${sessionsForDay}</td>
        </tr>`;
      });
      
      html += '</table>';
      return html;
    }
    
    function setupActivityFilters(originalSnapshot) {
      const studentFilter = document.getElementById('student-filter');
      const toggleDetailed = document.getElementById('toggle-detailed');
      const detailedActivity = document.getElementById('detailed-activity');
      const dateStart = document.getElementById('date-start');
      const dateEnd = document.getElementById('date-end');
      const applyDateFilter = document.getElementById('apply-date-filter');
      const clearDateFilter = document.getElementById('clear-date-filter');
      
      let originalActivities = []; // Store original data
      
      // Store original activity data for filtering
      const rows = document.querySelectorAll('.activity-row');
      rows.forEach(row => {
        const timestamp = row.cells[3].textContent; // timestamp column
        originalActivities.push({
          element: row,
          email: row.dataset.email,
          timestamp: new Date(timestamp),
          dateString: row.dataset.date
        });
      });
      
      function applyFilters() {
        const selectedEmail = studentFilter ? studentFilter.value : 'all';
        const startDate = dateStart && dateStart.value ? new Date(dateStart.value + 'T00:00:00') : null;
        const endDate = dateEnd && dateEnd.value ? new Date(dateEnd.value + 'T23:59:59') : null;
        
        let visibleCount = 0;
        
        // Filter detailed activity rows
        originalActivities.forEach(activity => {
          let show = true;
          
          // Student filter
          if (selectedEmail !== 'all' && activity.email !== selectedEmail) {
            show = false;
          }
          
          // Date range filter - more precise checking
          if (startDate && activity.timestamp < startDate) {
            show = false;
          }
          if (endDate && activity.timestamp > endDate) {
            show = false;
          }
          
          if (show) {
            visibleCount++;
          }
          
          activity.element.style.display = show ? '' : 'none';
        });
        
        // Update count display
        updateFilteredCount(visibleCount);
        
        // Always regenerate session summary table when filtering
        if (originalSnapshot) {
          regenerateSessionTable(originalSnapshot, selectedEmail, startDate, endDate);
        }
        
        // Update daily breakdown for selected student
        updateDailyBreakdown(selectedEmail, originalSnapshot, startDate, endDate);
      }
      
      function updateFilteredCount(count) {
        // Find or create count display
        let countDisplay = document.getElementById('filtered-count');
        if (!countDisplay) {
          countDisplay = document.createElement('div');
          countDisplay.id = 'filtered-count';
          countDisplay.style.cssText = 'margin: 1rem 0; padding: 0.5rem; background: #f8f9fa; border: 1px solid #ddd; border-radius: 4px;';
          const detailedTable = document.querySelector('#detailed-activity table');
          if (detailedTable) {
            detailedTable.parentNode.insertBefore(countDisplay, detailedTable);
          }
        }
        
        countDisplay.innerHTML = `<strong>Showing ${count} filtered activities</strong>`;
      }
      
      function updateDailyBreakdown(selectedEmail, snapshot, startDate, endDate) {
        const dailyContainer = document.getElementById('daily-breakdown');
        if (dailyContainer) {
          console.log('Updating daily breakdown for:', selectedEmail, 'Date range:', startDate, endDate);
          const breakdownHtml = calculateStudentDailyBreakdown(selectedEmail, snapshot, startDate, endDate);
          console.log('Generated HTML:', breakdownHtml);
          dailyContainer.innerHTML = breakdownHtml;
        } else {
          console.log('Daily breakdown container not found');
        }
      }
      
      function regenerateSessionTable(snapshot, selectedEmail, startDate, endDate) {
        // Filter snapshot data by date range
        const filteredActivities = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const timestamp = data.timestamp ? data.timestamp.toDate() : new Date();
          
          let include = true;
          if (startDate && timestamp < startDate) include = false;
          if (endDate && timestamp > endDate) include = false;
          if (selectedEmail !== 'all' && data.email !== selectedEmail) include = false;
          
          if (include) {
            filteredActivities.push({ ...data, timestamp });
          }
        });
        
        // Create filtered snapshot-like object with proper timestamp format
        const filteredSnapshot = {
          empty: filteredActivities.length === 0,
          forEach: function(callback) {
            filteredActivities.forEach((data, index) => {
              callback({ 
                data: () => ({
                  ...data,
                  timestamp: {
                    toDate: () => data.timestamp
                  }
                })
              }, index);
            });
          }
        };
        
        // Regenerate session data with filtered data
        const filteredUserData = processUserSessions(filteredSnapshot);
        
        // Update session summary table
        const summaryTable = document.querySelector('h4 + table');
        if (summaryTable) {
          let tableHtml = '<tr style="background: #f8f9fa;"><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Student</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Total Sessions</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Total Time</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Last Login</th><th style="text-align: left; padding: 0.5rem; border: 1px solid #ddd;">Pages Viewed</th></tr>';
          
          Object.entries(filteredUserData).forEach(([email, data]) => {
            const totalMinutes = Math.round(data.totalTime / 60000); // Convert ms to minutes
            tableHtml += `<tr>
              <td style="padding: 0.5rem; border: 1px solid #ddd;">${email}</td>
              <td style="padding: 0.5rem; border: 1px solid #ddd;">${data.sessions.length}</td>
              <td style="padding: 0.5rem; border: 1px solid #ddd;">${totalMinutes} minutes</td>
              <td style="padding: 0.5rem; border: 1px solid #ddd;">${data.lastLogin || 'N/A'}</td>
              <td style="padding: 0.5rem; border: 1px solid #ddd;">${data.pageViews}</td>
            </tr>`;
          });
          
          summaryTable.innerHTML = tableHtml;
        }
      }
      
      // Student filter
      if (studentFilter) {
        studentFilter.addEventListener('change', function() {
          console.log('Student filter changed to:', this.value);
          applyFilters();
        });
      }
      
      // Date filter buttons
      if (applyDateFilter) {
        applyDateFilter.addEventListener('click', applyFilters);
      }
      
      if (clearDateFilter) {
        clearDateFilter.addEventListener('click', function() {
          if (dateStart) dateStart.value = '';
          if (dateEnd) dateEnd.value = '';
          applyFilters();
        });
      }
      
      // Toggle detailed view
      if (toggleDetailed) {
        toggleDetailed.addEventListener('click', function() {
          if (detailedActivity.style.display === 'none') {
            detailedActivity.style.display = 'block';
            this.textContent = 'Hide Detailed Log';
          } else {
            detailedActivity.style.display = 'none';
            this.textContent = 'Show Detailed Log';
          }
        });
      }
    }
    
    function displayActivitySummary(snapshot) {
      const container = document.getElementById('student-list');
      
      if (snapshot.empty) {
        container.innerHTML = '<p>No activity recorded yet.</p>';
        return;
      }
      
      const users = new Set();
      const actions = {};
      let totalActivity = 0;
      
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.email) users.add(data.email);
        if (data.action) {
          actions[data.action] = (actions[data.action] || 0) + 1;
        }
        totalActivity++;
      });
      
      let html = `
        <p><strong>Total Students:</strong> ${users.size}</p>
        <p><strong>Total Activities:</strong> ${totalActivity}</p>
        <p><strong>Activity Breakdown:</strong></p>
        <ul>
      `;
      
      for (const [action, count] of Object.entries(actions)) {
        html += `<li>${action}: ${count}</li>`;
      }
      
      html += '</ul>';
      container.innerHTML = html;
    }
  }
  
});
</script>