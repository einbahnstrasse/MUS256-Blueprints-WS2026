// Concert pieces data - easily reorderable
const pieces = [
    {
        id: 1,
        title: "宙然变幻·Cosmorphosis",
        year: 2025,
        composer: "Hannah Yang",
        duration: "6:21",
        programNote: "This piece imagines the sounds from the universe — peace, weightlessness, and unpredictability. Using a mix of concrete sounds such as wind, whale calls, fireworks, wind-bell, etc., blended with synthesized textures. The work creates a slow, immersive environment that is calming. Rather than describing a specific scene, the piece invites listeners to drift into their own imagined spaces as the sounds move."
    },
    {
        id: 2,
        title: "Intergalactic",
        year: 2025,
        composer: "Darius Toosi",
        duration: "5:54",
        programNote: "This piece employs sound as a physical force of cosmic movement. Using layers of Karplus–Strong synthesis, I created tones that oscillate, decay, and collide as though they were floating through an unfamiliar atmosphere. Instead of imagining space literally, the piece seeks to evoke how science-fiction intergalactic worlds feel: the buzz of alien technology, the collision of particles, and the quiet pulse of distant interstellar bodies."
    },
    {
        id: 3,
        title: "Haywire",
        year: 2025,
        composer: "Tauson Biggs",
        duration: "7:03",
        programNote: "This piece explores how sound created through modular synthesis can be sewn together into a more cohesive work through automation. I was inspired by the works of synthesizer artists like Bebe and Louis Barron and Richard Devine, whom we listened to over the course of the semester. This work blends synthesizer randomization with very intentional automation choices that I felt matched the shape and tone of each sound. As the piece progresses, it becomes more complex, not necessarily in the addition of new tracks or elements but through the details and variety of each sound source. Haywire is a product of a personal interest in synthesizer-produced sound and celebrates how this type of sound can broaden the music field."
    },
    {
        id: 4,
        title: "Hazy Phantasmal Dream",
        year: 2025,
        composer: "Mason Choiniere Barr",
        duration: "7:12",
        programNote: "When I was creating this piece, the idea was to create balance within contrast. Over the course of three movements, I interpreted this idea in different contexts. The first movement juxtaposes moments of timbral blend with discordant interjections sampled from our 'micromontage' project from earlier this semester, but a consistent chord structure and build is maintained throughout. This all breaks down in the next movement, which features much harsher sounds. As the piece loses its timbral blend, I tried to lean more into sounds that don't fit together to make each one stand out more, all while maintaining a rhythmic undercurrent to tie them together. In the final movement, a tight blend is reestablished. Each of the four distinct tracks are revealed as the overall timbre shifts, revealing layers of contrast within what initially sounds cohesive."
    },
    {
        id: 5,
        title: "Travel",
        year: 2025,
        composer: "Xucheng Zheng",
        duration: "6:38",
        programNote: "A blend of synthetic, natural, and city sound. Sounds sourced from a street in Changchun, China in 2003, 1990s Russia, a modern Shanghai railroad, and the Apollo mission were used to capture moments of traveling. Human make and hear so much noise as they travel. This is glimpse to all of them."
    },
    {
        id: 6,
        title: "Lift and Return",
        year: 2025,
        composer: "Nate Smith",
        duration: "6:24",
        programNote: "This piece combines field recordings of animal sounds with VCV Rack patches as its main material. The piece focuses on long, slowly shifting textures that travel in circular paths around the eight speakers, so motion in space is as important as pitch or timbre. There is a loose narrative: an animal running through the woods, suddenly caught and lifted into an unfamiliar, alien environment, then finally dropped back and released. The electronic layer is built from macro oscillators, LFOs and other control voltages, quantizers, and random generation modules, which keep the sound in constant low level flux. The piece works less as the story of the animal, but the conversation about it by the alien abductors."
    },
    {
        id: 7,
        title: "Multidimensional Magical Melee",
        year: 2025,
        composer: "Drew von Jako",
        duration: "5:54",
        programNote: "Multidimensional Magical Melee invites you through a shifting, multidimensional battlefield packed with the forces of curiosity, magic, and triumph. Drawing inspiration from creating video game music, I sought to construct an action-oriented piece following an unnamed hero striving to overcome an insurmountable threat. Across eight channels, sounds and melodies dart through the space as the cataclysmic battle unfolds, creating an immersive sense of combat surrounding the listener. While many sounds originate from synthetic waveforms designed by me, my piece also contains textures drawn from my everyday life, including my room and the gym. Together, all these elements culminate in a piece that exemplifies that not all hero's journey stories end the way we expect them to."
    },
    {
        id: 8,
        title: "The Only Thing Constant Is Change",
        year: 2025,
        composer: "Scarlett Hine",
        duration: "7:44",
        programNote: "Change can be moving and powerful without being chaotic and abrupt. This piece examines gradual change over a period of time. While alone these sounds are minimal but when brought together they create a piece with depth and weight. If you find yourself being able to fixate on one of the sounds, investigate how it changes and moves in every possible musical way. This could be pitch, texture, or speed; all things that will in fact change over time. Sit with the sounds and enjoy the listening experience of gradual change."
    }
];

// Program order - modify this array to reorder pieces
// Simply change the numbers to change the order
const programOrder = [1, 2, 3, 4, 5, 6, 7, 8];
// const programOrder = [7, 2, 5, 3, 6, 8, 4, 1];

// Function to render pieces
function renderPieces() {
    const container = document.getElementById('pieces-container');
    
    programOrder.forEach((pieceId, index) => {
        const piece = pieces.find(p => p.id === pieceId);
        
        const pieceElement = document.createElement('article');
        pieceElement.className = 'piece';
        pieceElement.setAttribute('data-piece-id', piece.id);
        
        pieceElement.innerHTML = `
            <div class="piece-header">
                <div class="piece-number">${index + 1}</div>
                <div class="piece-title-row">
                    <h3 class="piece-title">${piece.title}</h3>
                    <div class="piece-duration">${piece.duration}</div>
                </div>
                <p class="piece-composer">${piece.composer}</p>
            </div>
            <div class="program-note">
                <p>${piece.programNote}</p>
            </div>
        `;
        
        container.appendChild(pieceElement);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderPieces);
