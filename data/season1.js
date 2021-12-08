export const season1 = {
  seasonName: "season1",
  // prettier-ignore
  contestants: {
         "contestant-1": { id:"contestant-1", name: "Avis", img: "/images/contestants/s1/Avis-White.jpg" },
         "contestant-2": { id:"contestant-2", name: "David", img: "/images/contestants/s1/David-Miller.jpg" },
         "contestant-3": { id:"contestant-3", name: "Faruq", img: "/images/contestants/s1/Faruq-Jenkins.jpg" },
         "contestant-4": { id:"contestant-4", name: "Jake", img: "/images/contestants/s1/Jake-Gandolfo.jpg" },
         "contestant-5": { id:"contestant-5", name: "Jenna",img: "/images/contestants/s1/Jenna-Hamiter.jpg",},
         "contestant-6": { id:"contestant-6", name: "Kim", img: "/images/contestants/s1/Kim-Dung-Slim-Hyunh.jpg" },
         "contestant-7": { id:"contestant-7", name: "Lee", img: "/images/contestants/s1/Lee-Knaz.jpg" },
         "contestant-8": { id:"contestant-8", name: "Mike", img: "/images/contestants/s1/Mike-Kim.jpg" },
         "contestant-9": { id:"contestant-9", name: "Sharone", img: "/images/contestants/s1/Sharone-Hakman.JPG" },
         "contestant-10": { id:"contestant-10", name: "Sheena",img: "/images/contestants/s1/Sheena-Zadeh.jpg",},
         "contestant-11": { id:"contestant-11", name: "Sheetal", img: "/images/contestants/s1/Sheetal-Bhagat.JPG" },
         "contestant-12": { id:"contestant-12", name: "Tony", img: "/images/contestants/s1/Tony Carbone.jpg" },
         "contestant-13": { id:"contestant-13", name: "Tracy", img: "/images/contestants/s1/Tracy-Nailor.JPG" },
         "contestant-14": { id:"contestant-14", name: "Whitney",img: "/images/contestants/s1/Whitney-Miller.jpg"},

      },

  columns: {
    "column-start": {
      id: "column-start",
      title: "Season 1 - Top 14",
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
