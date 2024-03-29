export const season3 = {
  seasonName: "season3",
  // prettier-ignore
  contestants: {
       "contestant-1": { id:"contestant-1", name: "Anna", img: "/images/contestants/s3/Anna-Rossi.jpg" },
       "contestant-2": { id:"contestant-2", name: "Becky", img: "/images/contestants/s3/Becky-Reams.jpg" },
       "contestant-3": { id:"contestant-3", name: "Christine", img: "/images/contestants/s3/Christine-Hà.jpg" },
       "contestant-4": { id:"contestant-4", name: "Dave", img: "/images/contestants/s3/Dave-Mack.jpg" },
       "contestant-5": { id:"contestant-5", name: "David",img: "/images/contestants/s3/David-Martinez.jpg",},
       "contestant-6": { id:"contestant-6", name: "Felix", img: "/images/contestants/s3/Felix-Fang.jpg" },
       "contestant-7": { id:"contestant-7", name: "Frank", img: "/images/contestants/s3/Frank-Mirando.jpg" },
       "contestant-8": { id:"contestant-8", name: "Helene", img: "/images/contestants/s3/Helene-Leeds.jpg" },
       "contestant-9": { id:"contestant-9", name: "Josh", img: "/images/contestants/s3/Josh-Marks.jpg" },
       "contestant-10": { id:"contestant-10", name: "Mairym",img: "/images/contestants/s3/Mairym-Monti-Carlo.jpg",},
       "contestant-11": { id:"contestant-11", name: "Michael", img: "/images/contestants/s3/Michael-Chen.jpg" },
       "contestant-12": { id:"contestant-12", name: "Mike", img: "/images/contestants/s3/Mike-Hill.jpg" },
       "contestant-13": { id:"contestant-13", name: "Ryan", img: "/images/contestants/s3/Ryan-Umane.jpg" },
       "contestant-14": { id:"contestant-14", name: "Samantha",img: "/images/contestants/s3/Samantha-De-Silva.jpg"},
       "contestant-15": { id:"contestant-15", name: "Scott", img: "/images/contestants/s3/Scott-Little.jpg" },
       "contestant-16": { id:"contestant-16", name: "Stacey",img: "/images/contestants/s3/Stacey-Amagrande.jpg" },
       "contestant-17": { id:"contestant-17", name: "Tali", img: "/images/contestants/s3/Tali-Clavijo.jpg" },
       "contestant-18": { id:"contestant-18", name: "Tenya", img: "/images/contestants/s3/Tanya-Noble.jpg" },
    },
  columns: {
    "column-start": {
      id: "column-start",
      title: "Season 3 - Top 18",
      contestantsIds: [
        "contestant-1",
        "contestant-2",
        "contestant-3",
        "contestant-4",
        "contestant-5",
        "contestant-6",
        "contestant-7",
        "contestant-8",
        "contestant-9",
        "contestant-10",
        "contestant-11",
        "contestant-12",
        "contestant-13",
        "contestant-14",
        "contestant-15",
        "contestant-16",
        "contestant-17",
        "contestant-18",
      ],
    },
    "column-good": {
      id: "column-good",
      title: "Good",
      img: "/images/emotes/OkayChamp.png",
      contestantsIds: [],
    },
    "column-good-content": {
      id: "column-good-content",
      title: "",
      imgArr: [
        {
          img: "/images/emotes/OkayChamp.png",
        },
        {
          img: "/images/emotes/SillyChamp.png",
        },
      ],
      contestantsIds: [],
    },
    "column-content": {
      id: "column-content",
      title: "Content",
      img: "/images/emotes/SillyChamp.png",
      contestantsIds: [],
    },
    "column-content-bad": {
      id: "column-content-bad",
      title: "",
      imgArr: [
        {
          img: "/images/emotes/SillyChamp.png",
        },
        {
          img: "/images/emotes/WeirdChamp.png",
        },
      ],
      contestantsIds: [],
    },
    "column-bad": {
      id: "column-bad",
      title: "Weird",
      img: "/images/emotes/WeirdChamp.png",
      contestantsIds: [],
    },
  },
  columnOrder: [
    "column-start",
    "column-good",
    "column-good-content",
    "column-content",
    "column-content-bad",
    "column-bad",
  ],
};
