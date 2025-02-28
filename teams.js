

// IPL Teams Data
const iplTeams = [
    {
        id: 1,
        name: "Mumbai Indians",
        shortName: "MI",
        founded: 2008,
        homeGround: "Wankhede Stadium, Mumbai",
        owner: "Reliance Industries",
        titles: 5,
        titleYears: [2013, 2015, 2017, 2019, 2020],
        color: "#004BA0",
        captain: "Hardik Pandya",
        coach: "Mahela Jayawardene",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
        description: "Mumbai Indians is the most successful franchise in IPL history with five championship titles. Based in Mumbai, Maharashtra, the team is owned by India's biggest conglomerate, Reliance Industries, and has been captained by Rohit Sharma since 2013.",
        keyPlayers: 
[
  { name: "Rohit Sharma", role: "Batsman", image: "https://www.mumbaiindians.com/static-assets/images/players/large/3852.png?v=5.03&w=200" },
{ name: "Suryakumar Yadav", role: "Batsman", image: "https://www.mumbaiindians.com/static-assets/images/players/large/11803.png?v=5.03&w=200" },
{ name: "Tilak Varma", role: "Batsman", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/993.png" },
{ name: "Bevon Jacobs", role: "Batsman", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1234.png" },

{ name: "Ryan Rickelton", role: "Wicketkeeper", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1235.png" },
{ name: "Robin Minz", role: "Wicketkeeper", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1236.png" },
{ name: "Krishnan Shrijith", role: "Wicketkeeper", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1237.png" },

{ name: "Hardik Pandya", role: "All-rounder", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/54.png" },
{ name: "Will Jacks", role: "All-rounder", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1238.png" },
{ name: "Mitchell Santner", role: "All-rounder", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1239.png" },
{ name: "Naman Dhir", role: "All-rounder", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1240.png" },
{ name: "Raj Angad Bawa", role: "All-rounder", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1241.png" },
{ name: "Vignesh Puthur", role: "All-rounder", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1242.png" },
{ name: "Satyanarayana Raju", role: "All-rounder", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1243.png" },

{ name: "Jasprit Bumrah", role: "Bowler", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/9.png" },
{ name: "Trent Boult", role: "Bowler", image: "https://www.mumbaiindians.com/static-assets/images/players/large/117.png" },
{ name: "Deepak Chahar", role: "Bowler", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1244.png" },
{ name: "Reece Topley", role: "Bowler", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1245.png" },
{ name: "Lizaad Williams", role: "Bowler", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1246.png" },
{ name: "Arjun Tendulkar", role: "Bowler", image: "https://www.mumbaiindians.com/static-assets/images/players/large/121.png" },
{ name: "Ashwani Kumar", role: "Bowler", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1247.png" },
{ name: "Karn Sharma", role: "Bowler", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1248.png" },
{ name: "Mujeeb Ur Rahman", role: "Bowler", image: "https://www.mumbaiindians.com/static-assets/images/players/large/1249.png" }


]

    },
    {
        id: 2,
        name: "Chennai Super Kings",
        shortName: "CSK",
        founded: 2008,
        homeGround: "M. A. Chidambaram Stadium, Chennai",
        owner: "Chennai Super Kings Cricket Ltd.",
        titles: 4,
        titleYears: [2010, 2011, 2018, 2021],
        color: "#FFFF00",
        captain: "Ruturaj Gaikwad",
        coach: "Stephen Fleming",
	logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png",
        description: "Chennai Super Kings, fondly known as CSK, is one of the most consistent teams in IPL history. Led by the legendary MS Dhoni, they have won four championships and have qualified for the playoffs in 11 out of 12 seasons they have played.",
        keyPlayers: [
  { name: "Ruturaj Gaikwad", role: "Batter", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/102.png" },
  { name: "Devon Conway", role: "Batter/Wicketkeeper", image: "https://example.com/devon_conway.png" },
  { name: "Rahul Tripathi", role: "Batter", image: "https://example.com/rahul_tripathi.png" },
  { name: "Andre Siddarth", role: "Batter", image: "https://example.com/andre_siddarth.png" },
  { name: "Shivam Dube", role: "Batter", image: "https://example.com/shivam_dube.png" },
  { name: "Shaik Rasheed", role: "Batter", image: "https://example.com/shaik_rasheed.png" },
  { name: "MS Dhoni", role: "Wicketkeeper", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png" },
  { name: "Vansh Bedi", role: "Wicketkeeper", image: "https://example.com/vansh_bedi.png" },
  { name: "Deepak Hooda", role: "Batting All-rounder", image: "https://example.com/deepak_hooda.png" },
  { name: "Rachin Ravindra", role: "Batting All-rounder", image: "https://example.com/rachin_ravindra.png" },
  { name: "Vijay Shankar", role: "Batting All-rounder", image: "https://example.com/vijay_shankar.png" },
  { name: "Ravindra Jadeja", role: "Bowling All-rounder", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/46.png" },
  { name: "Ravichandran Ashwin", role: "Bowling All-rounder", image: "https://gallery.chennaisuperkings.com/PROD/TEAM/Team3playerImgNoBg_1740757404420.png" },
  { name: "Sam Curran", role: "Bowling All-rounder", image: "https://example.com/sam_curran.png" },
  { name: "Jamie Overton", role: "Bowling All-rounder", image: "https://example.com/jamie_overton.png" },
  { name: "Anshul Kamboj", role: "Bowling All-rounder", image: "https://example.com/anshul_kamboj.png" },
  { name: "Ramakrishna Ghosh", role: "Bowling All-rounder", image: "https://example.com/ramakrishna_ghosh.png" },
  { name: "Noor Ahmad", role: "Bowler", image: "https://example.com/noor_ahmad.png" },
  { name: "Shreyas Gopal", role: "Bowler", image: "https://example.com/shreyas_gopal.png" },
  { name: "Matheesha Pathirana", role: "Bowler", image: "https://example.com/matheesha_pathirana.png" },
  { name: "Khaleel Ahmed", role: "Bowler", image: "https://example.com/khaleel_ahmed.png" },
  { name: "Mukesh Choudhary", role: "Bowler", image: "https://example.com/mukesh_choudhary.png" },
  { name: "Gurjapneet Singh", role: "Bowler", image: "https://example.com/gurjapneet_singh.png" },
  { name: "Nathan Ellis", role: "Bowler", image: "https://example.com/nathan_ellis.png" },
  { name: "Kamlesh Nagarkoti", role: "Bowler", image: "https://example.com/kamlesh_nagarkoti.png" }
]

    },
    {
        id: 3,
        name: "Kolkata Knight Riders",
        shortName: "KKR",
        founded: 2008,
        homeGround: "Eden Gardens, Kolkata",
        owner: "Red Chillies Entertainment & Mehta Group",
        titles: 2,
        titleYears: [2012, 2014],
        color: "#3A225D",
        captain: "Venkatesh Iyer*",
        coach: "Brendon McCullum",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png",
        description: "Kolkata Knight Riders, owned by Bollywood superstar Shah Rukh Khan, has won two IPL titles. The team is known for its passionate fan base and its home ground, Eden Gardens, is one of the largest cricket stadiums in the world.",
        keyPlayers: 
[
  { name: "Moeen Ali", role: "All-rounder", image: "https://example.com/moeen_ali.png" },
  { name: "Vaibhav Arora", role: "Bowler", image: "https://example.com/vaibhav_arora.png" },
  { name: "Varun Chakravarthy", role: "Bowler", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/140.png" },
  { name: "Quinton de Kock", role: "Wicketkeeper-Batter", image: "https://example.com/quinton_de_kock.png" },
  { name: "Rahmanullah Gurbaz", role: "Wicketkeeper-Batter", image: "https://example.com/rahmanullah_gurbaz.png" },
  { name: "Venkatesh Iyer", role: "All-rounder", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/584.png" },
  { name: "Spencer Johnson", role: "Bowler", image: "https://example.com/spencer_johnson.png" },
  { name: "Umran Malik", role: "Bowler", image: "https://example.com/umran_malik.png" },
  { name: "Mayank Markande", role: "Bowler", image: "https://example.com/mayank_markande.png" },
  { name: "Sunil Narine", role: "All-rounder", image: "https://example.com/sunil_narine.png" },
  { name: "Anrich Nortje", role: "Bowler", image: "https://example.com/anrich_nortje.png" },
  { name: "Manish Pandey", role: "Batter", image: "https://example.com/manish_pandey.png" },
  { name: "Rovman Powell", role: "Batter", image: "https://example.com/rovman_powell.png" },
  { name: "Angkrish Raghuvanshi", role: "Batter", image: "https://example.com/angkrish_raghuvanshi.png" },
  { name: "Ajinkya Rahane", role: "Batter", image: "https://assets.iplt20.com/ipl/IPLHeadshot2022/135.png" },
  { name: "Harshit Rana", role: "Bowler", image: "https://example.com/harshit_rana.png" },
  { name: "Anukul Roy", role: "All-rounder", image: "https://example.com/anukul_roy.png" },
  { name: "Andre Russell", role: "All-rounder", image: "https://example.com/andre_russell.png" },
  { name: "Ramandeep Singh", role: "All-rounder", image: "https://example.com/ramandeep_singh.png" },
  { name: "Rinku Singh", role: "Batter", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/152.png" },
  { name: "Luvnith Sisodia", role: "Wicketkeeper-Batter", image: "https://example.com/luvnith_sisodia.png" }
]

    },
    {
        id: 4,
        name: "Delhi Capitals",
        shortName: "DC",
        founded: 2008,
        homeGround: "Arun Jaitley Stadium, Delhi",
        owner: "JSW & GMR Group",
        titles: 0,
        titleYears: [],
        color: "#0078BC",
        captain: "KL Rahul and Axar Patel*",
        coach: "Ricky Ponting",
        logo: "https://tse1.mm.bing.net/th?id=OIP.EF5uSd-ZCZjWzvYqPXQB5AHaHa&pid=Api",
        description: "Formerly known as Delhi Daredevils, the team was rebranded as Delhi Capitals in 2019. Despite never winning the IPL title, they have been finalists and are considered one of the strongest teams with young talent.",
        keyPlayers:
 [
  { name: "KL Rahul", role: "Wicketkeeper-Batter", image: "https://example.com/kl_rahul.png" },
  { name: "Harry Brook", role: "Batter", image: "https://example.com/harry_brook.png" },
  { name: "Faf du Plessis", role: "Batter", image: "https://example.com/faf_du_plessis.png" },
  { name: "Karun Nair", role: "Batter", image: "https://www.delhicapitals.in/static-assets/images/players/ipl/62297.png?v=1.82" },
  { name: "Sameer Rizvi", role: "Batter", image: "https://example.com/sameer_rizvi.png" },
  { name: "Donovan Ferreira", role: "Wicketkeeper-Batter", image: "https://example.com/donovan_ferreira.png" },
  { name: "Tripurana Vijay", role: "Batter", image: "https://example.com/tripurana_vijay.png" },
  { name: "Axar Patel", role: "All-rounder", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/110.png" },
  { name: "Kuldeep Yadav", role: "Bowler", image: "https://example.com/kuldeep_yadav.png" },
  { name: "Tristan Stubbs", role: "Wicketkeeper-Batter", image: "https://example.com/tristan_stubbs.png" },
  { name: "Ashutosh Sharma", role: "All-rounder", image: "https://example.com/ashutosh_sharma.png" },
  { name: "Mukesh Kumar", role: "Bowler", image: "https://example.com/mukesh_kumar.png" },
  { name: "Dushmantha Chameera", role: "Bowler", image: "https://example.com/dushmantha_chameera.png" },
  { name: "Ajay Mandal", role: "All-rounder", image: "https://example.com/ajay_mandal.png" },
  { name: "Manvanth Kumar", role: "Bowler", image: "https://example.com/manvanth_kumar.png" },
  { name: "Madhav Tiwari", role: "Batter", image: "https://example.com/madhav_tiwari.png" },
  { name: "Mitchell Starc", role: "Bowler", image: "https://example.com/mitchell_starc.png" },
  { name: "Jake Fraser-McGurk", role: "Batter", image: "https://example.com/jake_fraser_mcgurk.png" },
  { name: "T. Natarajan", role: "Bowler", image: "https://example.com/t_natarajan.png" },
  { name: "Mohit Sharma", role: "Bowler", image: "https://example.com/mohit_sharma.png" },
  { name: "Darshan Nalkande", role: "Bowler", image: "https://example.com/darshan_nalkande.png" },
  { name: "Vipraj Nigam", role: "Batter", image: "https://example.com/vipraj_nigam.png" }
]

    },
    {
        id: 5,
        name: "Royal Challengers Bangalore",
        shortName: "RCB",
        founded: 2008,
        homeGround: "M. Chinnaswamy Stadium, Bangalore",
        owner: "United Spirits",
        titles: 0,
        titleYears: [],
        color: "#EC1C24",
        captain: "Rajat Patidar",
        coach: "Simon Katich",
       logo: "https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
        description: "Royal Challengers Bangalore, led by cricket superstar Virat Kohli, is known for its batting powerhouse. Despite having some of the best players in the world, they are yet to win an IPL title, having been runners-up three times.",
        keyPlayers: 
[
  { name: "Virat Kohli", role: "Batter", image: "https://example.com/virat_kohli.png" },
  { name: "Rajat Patidar", role: "Batter", image: "https://example.com/rajat_patidar.png" },
  { name: "Phil Salt", role: "Wicketkeeper-Batter", image: "https://example.com/phil_salt.png" },
  { name: "Jitesh Sharma", role: "Wicketkeeper-Batter", image: "https://example.com/jitesh_sharma.png" },
  { name: "Devdutt Padikkal", role: "Batter", image: "https://example.com/devdutt_padikkal.png" },
  { name: "Swastik Chhikara", role: "Batter", image: "https://example.com/swastik_chhikara.png" },
  { name: "Liam Livingstone", role: "All-rounder", image: "https://example.com/liam_livingstone.png" },
  { name: "Krunal Pandya", role: "All-rounder", image: "https://example.com/krunal_pandya.png" },
  { name: "Swapnil Singh", role: "All-rounder", image: "https://example.com/swapnil_singh.png" },
  { name: "Tim David", role: "All-rounder", image: "https://example.com/tim_david.png" },
  { name: "Romario Shepherd", role: "All-rounder", image: "https://example.com/romario_shepherd.png" },
  { name: "Manoj Bhandage", role: "All-rounder", image: "https://example.com/manoj_bhandage.png" },
  { name: "Jacob Bethell", role: "All-rounder", image: "https://example.com/jacob_bethell.png" },
  { name: "Josh Hazlewood", role: "Bowler", image: "https://example.com/josh_hazlewood.png" },
  { name: "Yash Dayal", role: "Bowler", image: "https://example.com/yash_dayal.png" },
  { name: "Bhuvneshwar Kumar", role: "Bowler", image: "https://example.com/bhuvneshwar_kumar.png" },
  { name: "Suyash Sharma", role: "Bowler", image: "https://example.com/suyash_sharma.png" },
  { name: "Rasikh Salam Dar", role: "Bowler", image: "https://example.com/rasikh_salam_dar.png" },
  { name: "Nuwan Thushara", role: "Bowler", image: "https://example.com/nuwan_thushara.png" },
  { name: "Lungi Ngidi", role: "Bowler", image: "https://example.com/lungi_ngidi.png" },
  { name: "Abhinandan Singh", role: "Bowler", image: "https://example.com/abhinandan_singh.png" },
  { name: "Mohit Rathee", role: "Bowler", image: "https://example.com/mohit_rathee.png" }
]

    },
    {
        id: 6,
        name: "Rajasthan Royals",
        shortName: "RR",
        founded: 2008,
        homeGround: "Sawai Mansingh Stadium, Jaipur",
        owner: "Manoj Badale",
        titles: 1,
        titleYears: [2008],
        color: "#2B4C9E",
        captain: "Sanju Samson",
        coach: "Kumar Sangakkara",
        logo: "https://documents.iplt20.com/ipl/RR/Logos/Logooutline/RRoutline.png",
        description: "Rajasthan Royals won the inaugural IPL season in 2008 under Shane Warne's captaincy. Known for their ability to discover and nurture young talent, they've been one of the more economical teams in the IPL.",
        keyPlayers: 
[
  { name: "Sanju Samson", role: "Wicketkeeper-Batter", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/190.png" },
  { name: "Yashasvi Jaiswal", role: "Batter", image: "https://example.com/yashasvi_jaiswal.png" },
  { name: "Shimron Hetmyer", role: "Batter", image: "https://example.com/shimron_hetmyer.png" },
  { name: "Riyan Parag", role: "Batter", image: "https://example.com/riyan_parag.png" },
  { name: "Dhruv Jurel", role: "Wicketkeeper-Batter", image: "https://example.com/dhruv_jurel.png" },
  { name: "Shubham Dubey", role: "Batter", image: "https://example.com/shubham_dubey.png" },
  { name: "Vaibhav Suryavanshi", role: "Batter", image: "https://example.com/vaibhav_suryavanshi.png" },
  { name: "Kunal Rathore", role: "Wicketkeeper-Batter", image: "https://example.com/kunal_rathore.png" },
  { name: "Nitish Rana", role: "All-rounder", image: "https://example.com/nitish_rana.png" },
  { name: "Yudhvir Singh", role: "All-rounder", image: "https://example.com/yudhvir_singh.png" },
  { name: "Jofra Archer", role: "Bowler", image: "https://example.com/jofra_archer.png" },
  { name: "Wanindu Hasaranga", role: "Bowler", image: "https://example.com/wanindu_hasaranga.png" },
  { name: "Maheesh Theekshana", role: "Bowler", image: "https://example.com/maheesh_theekshana.png" },
  { name: "Akash Madhwal", role: "Bowler", image: "https://example.com/akash_madhwal.png" },
  { name: "Kumar Kartikeya Singh", role: "Bowler", image: "https://example.com/kumar_kartikeya_singh.png" },
  { name: "Tushar Deshpande", role: "Bowler", image: "https://example.com/tushar_deshpande.png" },
  { name: "Fazalhaq Farooqi", role: "Bowler", image: "https://example.com/fazalhaq_farooqi.png" },
  { name: "Kwena Maphaka", role: "Bowler", image: "https://example.com/kwena_maphaka.png" },
  { name: "Ashok Sharma", role: "Bowler", image: "https://example.com/ashok_sharma.png" }
]

    },
    {
        id: 7,
        name: "Sunrisers Hyderabad",
        shortName: "SRH",
        founded: 2013,
        homeGround: "Rajiv Gandhi International Cricket Stadium, Hyderabad",
        owner: "SUN Group",
        titles: 1,
        titleYears: [2016],
        color: "#F26522",
        captain: "Pat Cummins",
        coach: "Trevor Bayliss",
       logo: "https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",
        description: "Sunrisers Hyderabad joined the IPL in 2013, replacing Deccan Chargers. They won their first title in 2016 under David Warner's captaincy and are known for their strong bowling attack and consistent performances.",
        keyPlayers: 
[
  { name: "Pat Cummins", role: "Bowler", image: "https://example.com/pat_cummins.png" },
  { name: "Ishan Kishan", role: "Wicketkeeper-Batter", image: "https://example.com/ishan_kishan.png" },
  { name: "Heinrich Klaasen", role: "Wicketkeeper-Batter", image: "https://example.com/heinrich_klaasen.png" },
  { name: "Travis Head", role: "Batter", image: "https://example.com/travis_head.png" },
  { name: "Abhishek Sharma", role: "All-rounder", image: "https://example.com/abhishek_sharma.png" },
  { name: "Nitish Kumar Reddy", role: "All-rounder", image: "https://example.com/nitish_kumar_reddy.png" },
  { name: "Atharva Taide", role: "Batter", image: "https://example.com/atharva_taide.png" },
  { name: "Abhinav Manohar", role: "Batter", image: "https://example.com/abhinav_manohar.png" },
  { name: "Aniket Verma", role: "Batter", image: "https://example.com/aniket_verma.png" },
  { name: "Sachin Baby", role: "Batter", image: "https://example.com/sachin_baby.png" },
  { name: "Harshal Patel", role: "All-rounder", image: "https://example.com/harshal_patel.png" },
  { name: "Brydon Carse", role: "All-rounder", image: "https://example.com/brydon_carse.png" },
  { name: "Kamindu Mendis", role: "All-rounder", image: "https://example.com/kamindu_mendis.png" },
  { name: "Mohammed Shami", role: "Bowler", image: "https://example.com/mohammed_shami.png" },
  { name: "Mayank Markande", role: "Bowler", image: "https://example.com/mayank_markande.png" },
  { name: "Bhuvneshwar Kumar", role: "Bowler", image: "https://example.com/bhuvneshwar_kumar.png" },
  { name: "Umran Malik", role: "Bowler", image: "https://example.com/umran_malik.png" },
  { name: "T. Natarajan", role: "Bowler", image: "https://example.com/t_natarajan.png" },
  { name: "Fazalhaq Farooqi", role: "Bowler", image: "https://example.com/fazalhaq_farooqi.png" },
  { name: "Jaydev Unadkat", role: "Bowler", image: "https://example.com/jaydev_unadkat.png" }
]

    },
    {
        id: 8,
        name: "Punjab Kings",
        shortName: "PBKS",
        founded: 2008,
        homeGround: "PCA Stadium, Mohali",
        owner: "Preity Zinta, Ness Wadia, Mohit Burman, Karan Paul",
        titles: 0,
        titleYears: [],
        color: "#ED1B24",
        captain: "Shreyas Iyer",
        coach: "Anil Kumble",
        logo: "https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
        description: "Formerly known as Kings XI Punjab, the team was rebranded as Punjab Kings in 2021. Despite never winning the IPL, they were runners-up in 2014 and have had several star players over the years.",
        keyPlayers: 
[
  { name: "Shreyas Iyer", role: "Batter", image: "https://example.com/shreyas_iyer.png" },
  { name: "Nehal Wadhera", role: "Batter", image: "https://example.com/nehal_wadhera.png" },
  { name: "Vishnu Vinod", role: "Wicketkeeper-Batter", image: "https://example.com/vishnu_vinod.png" },
  { name: "Josh Inglis", role: "Wicketkeeper-Batter", image: "https://example.com/josh_inglis.png" },
  { name: "Harnoor Pannu", role: "Batter", image: "https://example.com/harnoor_pannu.png" },
  { name: "Pyla Avinash", role: "Batter", image: "https://example.com/pyla_avinash.png" },
  { name: "Prabhsimran Singh", role: "Wicketkeeper-Batter", image: "https://example.com/prabhsimran_singh.png" },
  { name: "Shashank Singh", role: "Batter", image: "https://example.com/shashank_singh.png" },
  { name: "Marcus Stoinis", role: "All-rounder", image: "https://example.com/marcus_stoinis.png" },
  { name: "Glenn Maxwell", role: "All-rounder", image: "https://example.com/glenn_maxwell.png" },
  { name: "Azmatullah Omarzai", role: "All-rounder", image: "https://example.com/azmatullah_omarzai.png" },
  { name: "Arshdeep Singh", role: "Bowler", image: "https://example.com/arshdeep_singh.png" },
  { name: "Yuzvendra Chahal", role: "Bowler", image: "https://example.com/yuzvendra_chahal.png" },
  { name: "Mohammed Shami", role: "Bowler", image: "https://example.com/mohammed_shami.png" },
  { name: "Harshal Patel", role: "Bowler", image: "https://example.com/harshal_patel.png" },
  { name: "Mayank Markande", role: "Bowler", image: "https://example.com/mayank_markande.png" },
  { name: "Bhuvneshwar Kumar", role: "Bowler", image: "https://example.com/bhuvneshwar_kumar.png" },
  { name: "Umran Malik", role: "Bowler", image: "https://example.com/umran_malik.png" },
  { name: "T. Natarajan", role: "Bowler", image: "https://example.com/t_natarajan.png" },
  { name: "Fazalhaq Farooqi", role: "Bowler", image: "https://example.com/fazalhaq_farooqi.png" },
  { name: "Jaydev Unadkat", role: "Bowler", image: "https://example.com/jaydev_unadkat.png" }
]

    },
    {
        id: 9,
        name: "Gujarat Titans",
        shortName: "GT",
        founded: 2022,
        homeGround: "Narendra Modi Stadium, Ahmedabad",
        owner: "CVC Capital Partners",
        titles: 1,
        titleYears: [2022],
        color: "#1B2133",
        captain: "Shubman Gill",
        coach: "Ashish Nehra",
        logo: "https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png",
        description: "Gujarat Titans is one of the newest IPL franchises, joining the league in 2022. Led by Hardik Pandya, they surprised everyone by winning the IPL in their debut season, showcasing excellent team balance and leadership.",
        keyPlayers: 
[
  { name: "Shubman Gill", role: "Batter", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Jos Buttler", role: "Wicketkeeper-Batter", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Kumar Kushagra", role: "Wicketkeeper-Batter", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Anuj Rawat", role: "Wicketkeeper-Batter", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Sherfane Rutherford", role: "Batter", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Glenn Phillips", role: "Batter", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Sai Sudharsan", role: "Batter", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Shahrukh Khan", role: "All-rounder", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Rahul Tewatia", role: "All-rounder", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Washington Sundar", role: "All-rounder", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Rashid Khan", role: "Bowler", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Mohammed Siraj", role: "Bowler", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Kagiso Rabada", role: "Bowler", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Prasidh Krishna", role: "Bowler", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Gerald Coetzee", role: "Bowler", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Sai Kishore", role: "Bowler", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Mahipal Lomror", role: "All-rounder", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Gurnoor Brar", role: "Bowler", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Arshad Khan", role: "All-rounder", image: "https://www.iplt20.com/teams/gujarat-titans" },
  { name: "Karim Janat", role: "All-rounder", image: "https://www.iplt20.com/teams/gujarat-titans" }
]

    },
    {
        id: 10,
        name: "Lucknow Super Giants",
        shortName: "LSG",
        founded: 2022,
        homeGround: "BRSABV Ekana Cricket Stadium, Lucknow",
        owner: "RPSG Group",
        titles: 0,
        titleYears: [],
        color: "#A72056",
        captain: "Rishabh Pant",
        coach: "Andy Flower",
        logo: "https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",
        description: "Lucknow Super Giants is one of the newest additions to the IPL, making their debut in 2022. Owned by the RPSG Group and led by KL Rahul, they aim to establish themselves as a competitive force in the tournament.",
        keyPlayers: 
[
  { name: "Rishabh Pant", role: "Wicketkeeper-Batter", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Nicholas Pooran", role: "Wicketkeeper-Batter", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "David Miller", role: "Batter", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Aiden Markram", role: "Batter", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Mitchell Marsh", role: "All-rounder", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Matthew Breetzke", role: "Batter", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Shamar Joseph", role: "Bowler", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Ayush Badoni", role: "All-rounder", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Ravi Bishnoi", role: "Bowler", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Mayank Yadav", role: "Bowler", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Mohsin Khan", role: "Bowler", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Avesh Khan", role: "Bowler", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Akash Deep", role: "Bowler", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Aryan Juyal", role: "Wicketkeeper-Batter", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Abdul Samad", role: "Batter", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Himmat Singh", role: "Batter", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Arshin Kulkarni", role: "All-rounder", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Rajvardhan Hangargekar", role: "Bowling All-rounder", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Shahbaz Ahmed", role: "All-rounder", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Yuvraj Chaudhary", role: "Batting All-rounder", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Akash Singh", role: "Bowler", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Digvesh Singh", role: "Bowler", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "M Siddharth", role: "Bowler", image: "https://www.iplt20.com/teams/lucknow-super-giants" },
  { name: "Prince Yadav", role: "All-rounder", image: "https://www.iplt20.com/teams/lucknow-super-giants" }
]

    }
];

// DOM Elements
const teamCardsContainer = document.getElementById('team-cards');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const titleFilter = document.getElementById('title-filter');
const yearFilter = document.getElementById('year-filter');
const modal = document.getElementById('team-modal');
const closeButton = document.querySelector('.close-button');
const modalTeamDetails = document.getElementById('modal-team-details');

// Create team cards
function renderTeamCards(teams) {
    teamCardsContainer.innerHTML = '';
    
    if (teams.length === 0) {
        teamCardsContainer.innerHTML = '<div class="no-results">No teams match your criteria. Please try a different search.</div>';
        return;
    }
    
    teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamCard.dataset.id = team.id;
        
        // Generate title icons HTML
        let titlesHTML = '';
        for (let i = 0; i < 5; i++) {
            titlesHTML += `<div class="title-icon ${i < team.titles ? 'won' : ''}">🏆</div>`;
        }
        
        teamCard.innerHTML = `
            <div class="team-banner" style="background-color: ${team.color}">
                <div class="team-logo">
                    <img src="${team.logo}" alt="${team.name} logo">
                </div>
            </div>
            <div class="team-info">
                <h3 class="team-name">${team.name} (${team.shortName})</h3>
                <div class="team-details">
                    <p>Home: ${team.homeGround.split(',')[0]}</p>
                    <p>Captain: ${team.captain}</p>
                </div>
                <div class="team-titles">
                    ${titlesHTML}
                </div>
            </div>
        `;
        
        teamCard.addEventListener('click', () => openTeamModal(team));
        teamCardsContainer.appendChild(teamCard);
    });
}

// Filter teams based on search and filters
function filterTeams() {
    const searchTerm = searchInput.value.toLowerCase();
    const titleValue = titleFilter.value;
    const yearValue = parseInt(yearFilter.value);
    
    return iplTeams.filter(team => {
        // Search term filter
        const matchesSearch = team.name.toLowerCase().includes(searchTerm) || 
                             team.shortName.toLowerCase().includes(searchTerm) ||
                             team.captain.toLowerCase().includes(searchTerm);
        
        // Titles filter
        let matchesTitles = true;
        if (titleValue !== 'all') {
            if (titleValue === '0') {
                matchesTitles = team.titles === 0;
            } else if (titleValue === '1-2') {
                matchesTitles = team.titles >= 1 && team.titles <= 2;
            } else if (titleValue === '3+') {
                matchesTitles = team.titles >= 3;
            }
        }
        
        // Year filter
        let matchesYear = true;
        if (yearValue && !isNaN(yearValue)) {
            matchesYear = team.founded >= yearValue;
        }
        
        return matchesSearch && matchesTitles && matchesYear;
    });
}

// Search and filter event handlers
searchBtn.addEventListener('click', () => {
    const filteredTeams = filterTeams();
    renderTeamCards(filteredTeams);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const filteredTeams = filterTeams();
        renderTeamCards(filteredTeams);
    }
});

titleFilter.addEventListener('change', () => {
    const filteredTeams = filterTeams();
    renderTeamCards(filteredTeams);
});

yearFilter.addEventListener('change', () => {
    const filteredTeams = filterTeams();
    renderTeamCards(filteredTeams);
});

// Modal functionality
function openTeamModal(team) {
    // Generate title years text
    let titleYearsText = team.titleYears.length > 0 
        ? `Championships: ${team.titleYears.join(', ')}` 
        : 'No championships yet';
        
    // Generate player HTML
    let playersHTML = '';
    team.keyPlayers.forEach(player => {
        playersHTML += `
            <div class="player-item">
    <div class="player-image">
        <img src="${player.image}" alt="${player.name}">
    </div>
    <div class="player-name">${player.name}</div>
    <div class="player-role">${player.role}</div>
</div>
        `;
    });
    
    modalTeamDetails.innerHTML = `
        <div class="team-header">
            <div class="modal-team-logo">
                <img src="${team.logo}" alt="${team.name} logo">
            </div>
            <div class="team-title">
                <h2>${team.name}</h2>
                <p>${titleYearsText}</p>
            </div>
        </div>
        
        <div class="team-stats">
            <div class="stat-item">
                <div class="stat-title">Founded</div>
                <div class="stat-value">${team.founded}</div>
            </div>
            <div class="stat-item">
                <div class="stat-title">Home Ground</div>
                <div class="stat-value">${team.homeGround.split(',')[0]}</div>
            </div>
            <div class="stat-item">
                <div class="stat-title">Owner</div>
                <div class="stat-value">${team.owner.split('&')[0].trim()}</div>
            </div>
            <div class="stat-item">
                <div class="stat-title">Captain</div>
                <div class="stat-value">${team.captain}</div>
            </div>
        </div>
        
        <div class="team-description">
            <p>${team.description}</p>
        </div>
        
        <div class="player-list">
            <h3>Key Players</h3>
            <div class="player-grid">
                ${playersHTML}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

closeButton.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderTeamCards(iplTeams);
});