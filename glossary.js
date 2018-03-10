
let title = deParam(window.location.search).title
let allTitles = _.uniq(exercises.map(e=>e.title))
let titles = title? [title] : allTitles

$(document).ready(() => {

  for (title of titles){
    let div = $('<div class="problems"></div>').appendTo('.exerciseIndex  ')
    div.append(`<h3 class="probTitle" id="${title}">${title}</h3>`)

    let x = exercises.filter((ex) => ex.title == title);

    x.forEach((ex) => {
      div.append(`<span class="exercise-link" id="${ex.name}"><a href='exercise?name=${ex.name}&title=${ex.title}'>${ex.name}</a>&nbsp;</span><br />`)
     if (localStorage[ex.name] == "true"){
        $(`#${ex.name}`).append('<span class="tick"><b>✓</b></span>');
      }
    });
  }




})

// for (let i = 0; i < exercises.length; i++)
//   if ($(`.${exercises[i].title} p:first-child`).text() == exercises[i].title){
//     $(`.${exercises[i].title}`).append(`<p>${exercises[i].name}</p>`);
//   }
