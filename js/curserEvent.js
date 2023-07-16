AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
  
    init: function () {
      this.handleMouseEnterEvents()
      this.handleMouseLeaveEvents()
    },
  
    handleComicListState: function () {
      const id = this.el.getAttribute("id");
      const comicId = ["dark-night","roller-girl","slumberjanes","moongirl"];
      if (comicId.includes(id)) {
        const comicContainer = document.querySelector("#comic-container");
        comicContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "grey",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () { 
      this.el.addEventListener("mouseenter", () => {
        this.handleComicListState()
      })
  
  

    },
    handleMouseLeaveEvents: function () {
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        // console.log(this.data.selectedItemId)
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`)
          //console.log( el )
          const id = el.getAttribute("id")
          //console.log( id )
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "white",
              opacity: 1,
            })
          }
  
        }
  
      })
  
  
    },
  
  });
  