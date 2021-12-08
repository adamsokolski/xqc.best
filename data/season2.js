export const season2 = {
  seasonName: "season2",
  // prettier-ignore
  contestants: {
         "contestant-1": { id:"contestant-1", name: "Adrien", img: "/images/contestants/s2/Adrien-Nieto.jpg" },
         "contestant-2": { id:"contestant-2", name: "Alejandra", img: "/images/contestants/s2/Alejandra-Schrader.jpg" },
         "contestant-3": { id:"contestant-3", name: "Alvin", img: "/images/contestants/s2/Alvin-Schultz.jpg" },
         "contestant-4": { id:"contestant-4", name: "Angel", img: "/images/contestants/s2/Angel-Moore-Soukkay.jpg" },
         "contestant-5": { id:"contestant-5", name: "Ben", img: "/images/contestants/s2/Ben-Starr.jpg",},
         "contestant-6": { id:"contestant-6", name: "Christian", img: "/images/contestants/s2/Christian-Collins.PNG" },
         "contestant-7": { id:"contestant-7", name: "Christine", img: "/images/contestants/s2/Christine-Corley.jpg" },
         "contestant-8": { id:"contestant-8", name: "Derrick", img: "/images/contestants/s2/Derrick-Prince.jpg" },
         "contestant-9": { id:"contestant-9", name: "Erryn", img: "/images/contestants/s2/Erryn-Cobb.jpg" },
         "contestant-10": { id:"contestant-10", name: "Esther",img: "/images/contestants/s2/Esther-Kang.jpg",},
         "contestant-11": { id:"contestant-11", name: "Giuseppe", img: "/images/contestants/s2/Giuseppe-Morisco.PNG" },
         "contestant-12": { id:"contestant-12", name: "Jennie", img: "/images/contestants/s2/Jennie-Kelley.PNG" },
         "contestant-13": { id:"contestant-13", name: "Jennifer", img: "/images/contestants/s2/Jennifer-Behm.jpg" },
         "contestant-14": { id:"contestant-14", name: "Mark",img: "/images/contestants/s2/Mark-Raffaeli.jpg"},
         "contestant-15": { id:"contestant-15", name: "Max", img: "/images/contestants/s2/Max-Kramer.PNG" },
         "contestant-16": { id:"contestant-16", name: "Suzy",img: "/images/contestants/s2/Suzy-Singh.jpg" },
         "contestant-17": { id:"contestant-17", name: "Tony", img: "/images/contestants/s2/Tony-Scruggs.PNG" },
         "contestant-18": { id:"contestant-18", name: "Tracy", img: "/images/contestants/s2/Tracy-Kontos.jpg" },
      },

  columns: {
    "column-start": {
      id: "column-start",
      title: "Season 2 - Top 18",
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
      title: "Like",
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
      title: "Don't like",
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
