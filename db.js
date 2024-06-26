let users = [
    {
        id: "1",
        uid: "1FADHjb00BSAhdxOvhegY62n9Kr2",
        srcID: "1",
        name: "Ayush Kumar",
        email: "alice.johnson@example.com",
        mobile: "555-1234",
        aicheRegID: "AI12345",
        college: "Tech University",
        rollNumber: "TU2021CS001",
        idCardPhoto: "IDTU1234",
        tSize: "M",
        createdAt: "2021-09-01T12:34:56.789Z",
    },
    {
        id: "2",
        uid: "2",
        srcID: "2",
        name: "Bob Smith",
        email: "bob.smith@example.com",
        mobile: "555-5678",
        aicheRegID: "AI12346",
        college: "Engineering College",
        rollNumber: "EC2021ME002",
        idCardPhoto: "IDEC5678",
        tSize: "L",
        createdAt: "2021-09-01T12:34:56.789Z",
    },
    {
        id: "3",
        uid: "3",
        srcID: "3",
        name: "Carol White",
        email: "carol.white@example.com",
        mobile: "555-8765",
        aicheRegID: "AI12347",
        college: "Science Institute",
        rollNumber: "SI2021BT003",
        idCardPhoto: "IDSI8765",
        tSize: "S",
        createdAt: "2021-09-01T12:34:56.789Z",
    },
    {
        id: "4",
        uid: "4",
        srcID: "4",
        name: "David Brown",
        email: "david.brown@example.com",
        mobile: "555-4321",
        aicheRegID: "AI12348",
        college: "Arts College",
        rollNumber: "AC2021HT004",
        idCardPhoto: "IDAC4321",
        tSize: "XL",
        createdAt: "2021-09-01T12:34:56.789Z",
    },
    {
        id: "5",
        uid: "5",
        srcID: "5",
        name: "Eva Green",
        email: "eva.green@example.com",
        mobile: "555-3456",
        aicheRegID: "AI12349",
        college: "Business School",
        rollNumber: "BS2021MG005",
        idCardPhoto: "IDBS3456",
        tSize: "M",
        createdAt: "2021-09-01T12:34:56.789Z",
    },
];

const events = [
    {
        orgID: "aiche",
        prizeMoney: "",
        id: "1",
        poster: "https://res.cloudinary.com/dmvdbpyqk/image/upload/v1717655996/ndoqb3l9m6no38kehat8.svg",
        name: "CHEM-E-CAR",
        subHeading: "Ready Set go!! Unleash the Inner Engineer!",
        description: [
            "Calling all future chemical engineers! The AIChE's Chem-E-Car competition is a two-round challenge held at regional conferences, culminating at the annual Student Conference.",
            "The challenge is to design and build a miniature car propelled by the power of chemistry! The rounds include a poster competition that showcases your car's design and the know-how of the chemicals used. The ultimate test arrives when the car needs to cover a specified distance within a strict time limit. Safety comes first, and for that, teams are tested by a comprehensive safety program ensuring safe handling and disposal of chemicals throughout the competition, from preparation to operation. Chem-E-Car champions are finalized based on poster presentation, vehicle precision, safety consistency, and collaborative spirit.",
        ],
        rules: "https://docs.google.com/document/d/1APqVwdXNsxPZMzA3S1zQXkGnXlz-ud6j/edit?usp=sharing&ouid=100456363558753448293&rtpof=true&sd=true",
        isTeamEvent: true,
        maxTeamSize: 5,
        minTeamSize: 2,
    },
    {
        orgID: "aiche",
        id: "2",
        prizeMoney: "",
        poster: "https://res.cloudinary.com/dmvdbpyqk/image/upload/v1717655995/kspdwtblyqcwoqqqeddc.svg",
        name: "CHEM-E-JEOPARDY",
        subHeading: "Let the battle of wits begin!",
        description: [
            "Inspired by the iconic game show, Jeopardy! Chem-E-Jeopardy puts teams in a thrilling battle of wits and knowledge. From chemical engineering principles, STEM subjects to history buffs and pop culture fanatics, all disciplines are fair game.",
            "Decipher the questions, strategically choose the next question on the gameboard, and race against time to claim victory! The gameboard features six categories with five questions each. Three categories delve into the field of chemical engineering, two explore the STEM fields and one ventures beyond science for a surprise twist.",
        ],
        rules: "https://drive.google.com/file/d/1UWffy3RflT97ghVjEuJIvD4dzwE9s-LQ/view?usp=sharing",
        isTeamEvent: true,
        maxTeamSize: 5,
        minTeamSize: 2,
    },
    {
        orgID: "aiche",
        id: "3",
        prizeMoney: "",
        poster: "https://res.cloudinary.com/dmvdbpyqk/image/upload/v1717655996/ndoqb3l9m6no38kehat8.svg",
        name: "K-12 STEM OUTREACH",
        subHeading: "Unleash the STEM genius within!",
        description: [
            "The K-12 STEM Outreach Program empowers you to ignite a passion for science, technology, engineering, and math (STEM) in students from kindergarten through 12th grade.",
            "This interactive competition tests your teamwork, knowledge, creativity, critical thinking, and problem-solving skills – all in a fun-filled environment! It's the perfect platform to spark curiosity in young minds and inspire the next generation of STEM visionaries.",
            "The competition features four grade-level categories (K-2, 3-5, 6-8, 9-12) where participants showcase their projects through either pre-recorded video demonstrations or live presentations.",
        ],
        rules: "https://drive.google.com/file/d/1iznteMqtb6UH8paM5_Ef-s71msodnPuS/view?usp=sharing",
        isTeamEvent: true,
        maxTeamSize: 5,
        minTeamSize: 2,
    },
    {
        orgID: "aiche",
        id: "4",
        prizeMoney: "",
        poster: "https://res.cloudinary.com/dmvdbpyqk/image/upload/v1717655995/kspdwtblyqcwoqqqeddc.svg",
        name: "Student Poster Competition",
        subHeading: "Unleash ur poster making skills",
        description: [
            "To stimulate student creativity, the annual AIChE Poster Competition empowers chemical engineering students to showcase their research journey – methodology, findings, and groundbreaking conclusions – through informative and visually stunning posters. Impress a panel of expert chemical engineers with your research and communication skills.",
            "This event fosters a dynamic exchange of ideas, where students connect with fellow attendees and the wider audience, gaining valuable insights from industry experts who convene to discuss the latest advancements, research breakthroughs, and specific topics.",
            "Compete for cash prizes (up to $200!), recognition, and a chance to present at the annual student conference!",
        ],
        rules: "https://drive.google.com/file/d/1M3lMX_u7Ip0ySnNo-tK5MH_wIaKFoRjo/view?usp=sharing",
        isTeamEvent: false,
        maxTeamSize: 5,
        minTeamSize: 2,
    },
    {
        orgID: "aiche",
        id: "5",
        prizeMoney: "",
        poster: "https://res.cloudinary.com/dmvdbpyqk/image/upload/v1717655996/ndoqb3l9m6no38kehat8.svg",
        name: "Student Technical Paper Competition",
        subHeading: "Let’s explore and show the presentation",
        description: [
            "Blending your writings on a paper with your extravagant thoughts and showcasing to others is what called, perfection. It is that time to stoke up your papers with aspiring thoughts.",
            "Research plays a very pivotal role in engineering field. It is creative and systematic work done to explore knowledge. Keeping this thing in mind, we heartily welcome undergraduate students across different regions to demonstrate their oral presentations on chemical engineering topics.The subject of the paper mostly focuses on recent advances in chemical engineering field in the form of research.",
            "Exposure to this event will give you an opportunity to showcase your research and ignite the knowledge of young creative minds in the field of chemical engineering.",
        ],
        rules: "https://drive.google.com/file/d/19YNXFWtbxc4vxN4wxaDGer64IdWjg-pu/view?usp=sharing",
        isTeamEvent: false,
    },
    {
        orgID: "aiche",
        id: "6",
        prizeMoney: "",
        poster: "",
        name: "Flagship Event",
        subHeading: "",
        description: [""],
        rules: "",
        isTeamEvent: true,
        maxTeamSize: 5,
        minTeamSize: 2,
    },
];
let eventRegistrations = [
    {
        id: "1",
        eventID: "1",
        userID: "1",
    },
];
export default { users, events, eventRegistrations };
