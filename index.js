function getTime(time) {
  let hour = parseInt(time / 3600);
  const remainingSeconds = parseInt(time % 3600);
  let minute = parseInt(remainingSeconds / 60);
  let second = parseInt(remainingSeconds % 60);
  return `${hour} Hour ${minute} Minute ${second} Second ago`;
}

const feachCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const feachVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

const lodeCategoryVideos = (id) => {
  // alert(id)
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((error) => console.log(error));
};

const displayVideos = (videos) => {
  const videosContainer = document.getElementById("videos");
  videosContainer.innerHTML = "";
  if (videos.length == 0) {
    videosContainer.classList.remove = "grid";
    videosContainer.innerHTML = `
    <div class="min-h-96 flex justify-center items-center gap-5 flex-col">
    <img src="assets/Icon.png" />
    <h2 class="text-center text-xl font-bold">
    😌 Opps! No Content Here in this Category.
    </h2>
    </div>
    `;
    return;
  } else {
    videosContainer.classList.add = "grid";
  }
  videos.map((a) => {
    // console.log(a);
    const card = document.createElement("div");
    card.classList = "card ";
    card.innerHTML = `
    <figure class="h-52 relative">
    <img class="h-full w-full object-cover"
      src=${a.thumbnail}
      alt="Shoes" />
      ${
        a.others.posted_date?.length == 0
          ? ""
          : `<span class="absolute right-2 bottom-2 bg-black text-xs text-white rounded p-1">${getTime(
              a.others.posted_date
            )}</span>`
      }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover " src=${
      a.authors[0].profile_picture
    }>
    </img>
    </div>
    <div>
    <h2 class="font-bold" >${a.title}</h2>
    <div class="flex items-center gap-1 ">
    <p class="text-gray-500">${a.authors[0].profile_name}</p>
    ${
      a.authors[0].verified === true
        ? `<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"`
        : ""
    }
    </div>
    </div>
    </div>
  </div>
    `;
    videosContainer.append(card);
  });
};
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.map((i) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button onClick="lodeCategoryVideos(${i.category_id})" class="btn">${i.category}
    </button>
    `;
    categoryContainer.append(buttonContainer);
  });
};
feachCategories();
feachVideos();