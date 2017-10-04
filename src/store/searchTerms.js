const searchTerms = {
  state: {
    searchTerms: [
      {name: "aqua", color: "#00ffff"},
      {name: "aquamarine", color: "#7fffd4"},
      {name: "azure", color: "#f0ffff"},
      {name: "beige", color: "#f5f5dc"},
      {name: "black", color: "#000000"},
      {name: "blue", color: "#0000ff"},
      {name: "brown", color: "#a52a2a"},
      {name: "crimson", color: "#dc143c"},
      {name: "cyan", color: "#00ffff"},
      {name: "deeppink", color: "#ff1493"},
      {name: "dimgray", color: "#696969"},
      {name: "fuchsia", color: "#ff00ff"},
      {name: "gold", color: "#ffd700"},
      {name: "gray", color: "#808080"},
      {name: "green", color: "#008000"},
      {name: "greenyellow", color: "#adff2f"},
      {name: "grey", color: "#808080"},
      {name: "hotpink", color: "#ff69b4"},
      {name: "indigo", color: "#4b0082"},
      {name: "ivory", color: "#fffff0"},
      {name: "khaki", color: "#f0e68c"},
      {name: "lavender", color: "#e6e6fa"},
      {name: "lime", color: "#00ff00"},
      {name: "magenta", color: "#ff00ff"},
      {name: "maroon", color: "#800000"},
      {name: "navy", color: "#000080"},
      {name: "olive", color: "#808000"},
      {name: "orange", color: "#ffa500"},
      {name: "orangered", color: "#ff4500"},
      {name: "palegoldenrod", color: "#eee8aa"},
      {name: "palegreen", color: "#98fb98"},
      {name: "pink", color: "#ffc0cb"},
      {name: "purple", color: "#800080"},
      {name: "red", color: "#ff0000"},
      {name: "royalblue", color: "#4169e1"},
      {name: "seagreen", color: "#2e8b57"},
      {name: "silver", color: "#c0c0c0"},
      {name: "skyblue", color: "#87ceeb"},
      {name: "slateblue", color: "#6a5acd"},
      {name: "slategrey", color: "#708090"},
      {name: "teal", color: "#008080"},
      {name: "turquoise", color: "#40e0d0"},
      {name: "violet", color: "#ee82ee"},
      {name: "white", color: "#ffffff"},
      {name: "yellow", color: "#ffff00"},
    ]
  },
  getters: {
    getSearchTerms: state => state.searchTerms
  },
  mutations: {

  },
  actions: {
    getSearchTerms:(context) => {
      //get search terms to auto complete with.
    }
  }
}

export default searchTerms
