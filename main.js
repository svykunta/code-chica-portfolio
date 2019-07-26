document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    
    var nameParagraph = document.getElementById("name");
    if (nameParagraph.innerHTML === ""){
        nameParagraph.innerHTML = "My name is Shruti. I am 14 years old. I am a part of my school's orchestra program. I play the viola and have been playing it for 3 years.";
    } else {
        nameParagraph.innerHTML = "";
    }


}

function myName() {
    
    document.getElementById("name").innerHTML = "My name is Shruti. I am 14 years old. I am a part of my school's orchestra program. I play the viola and have been playing it for 3 years. "
}


function mySchool() {
    document.getElementById("school").innerHTML = "I am going to be a freshman at Round Rock High School this year. I went to Walsh Middle School, Cactus Ranch and Great Oaks Elementary.";
}

function myCareer() {
    document.getElementById("career").innerHTML = "I have a dog names Alfie. I think he is the cutest dog in the world, so I love playing with him. I also love to paint and read. I love reading and drawing. Some of my favorite authors include J.K. Rowling and Victoria Aveyard. My favorite medium is oil paints because they are so easy to blend with. I also enjoy watching Youtube videos with my sister. Currently my favorite show is Stranger Things becuase it has the right amount of mystery and horror. I'm still on season two, so no spoilers please!";
}

function myHobbies() {
    document.getElementById("hobbies").innerHTML = "I want to be a pediatric oncologist when I grow up. I have always been interested in the health science field, and working with children. I realized I wanted to also go into oncology when my grandmother was diagnosed with cancer. By being a pediatric oncologist I will be able to help children get through cancer and live their lives. ";
}