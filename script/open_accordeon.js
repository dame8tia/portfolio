/* let classLienClicked = document.querySelectorAll('.lien');
classLienClicked.addEventListener("click",console.log("Lien clicked")) ; */
/* console.log(classLienClicked); */




function open_menu_geo(){ 
    let lienClicked = document.getElementById('header_geomatik');
    console.log(lienClicked.id);

    console.log("dans console")

    if (lienClicked.id=="header_geomatik"){
        console.log('header_geomatik');
        let elementMenu=document.getElementById("collapseTwo");
        elementMenu.setAttribute("class", "accordion-collapse collapse show");
        let elementMenuButton=document.getElementById("collapseTwo_btn");
        elementMenuButton.setAttribute("aria-expanded", "true");
        elementMenuButton.setAttribute("class", "accordion-button");

        document.getElementById("collapseOne").setAttribute("class", "accordion-collapse collapse");
        document.getElementById("collapseOne_btn").setAttribute("aria-expanded", "false");
        document.getElementById("collapseOne_btn").setAttribute("class", "accordion-button collapsed");

        document.getElementById("collapseThree").setAttribute("class", "accordion-collapse collapse");
        document.getElementById("collapseThree_btn").setAttribute("aria-expanded", "false");
        document.getElementById("collapseThree_btn").setAttribute("class", "accordion-button collapsed");
    }
}

function open_menu_dev(){
    let lienClicked = document.getElementById('header_devWeb');
    console.log(lienClicked.id);

    console.log("dans console")

    if(lienClicked.id=="header_devWeb") {
        console.log('header_devWeb');
        let elementMenu=document.getElementById("collapseOne");
        elementMenu.setAttribute("class", "accordion-collapse collapse show");
        let elementMenuButton=document.getElementById("collapseOne_btn");
        elementMenuButton.setAttribute("aria-expanded", "true");
        elementMenuButton.setAttribute("class", "accordion-button");
    
        document.getElementById("collapseTwo").setAttribute("class", "accordion-collapse collapse");
        document.getElementById("collapseTwo_btn").setAttribute("aria-expanded", "false");
        document.getElementById("collapseTwo_btn").setAttribute("class", "accordion-button collapsed");
    
        document.getElementById("collapseThree").setAttribute("class", "accordion-collapse collapse");
        document.getElementById("collapseThree_btn").setAttribute("aria-expanded", "false");
        document.getElementById("collapseThree_btn").setAttribute("class", "accordion-button collapsed");
    }
}

function open_menu_sgbd(){
    let lienClicked = document.getElementById('header_sgbd');
    console.log(lienClicked.id);

    console.log("dans console")

    if(lienClicked.id=="header_sgbd") {
        console.log('header_sgbd');
        let elementMenu=document.getElementById("collapseThree");
        elementMenu.setAttribute("class", "accordion-collapse collapse show");
        let elementMenuButton=document.getElementById("collapseThree_btn");
        elementMenuButton.setAttribute("aria-expanded", "true");

        document.getElementById("collapseTwo").setAttribute("class", "accordion-collapse collapse");
        document.getElementById("collapseTwo_btn").setAttribute("aria-expanded", "false");
        document.getElementById("collapseTwo_btn").setAttribute("class", "accordion-button collapsed");

        document.getElementById("collapseOne").setAttribute("class", "accordion-collapse collapse");
        document.getElementById("collapseOne_btn").setAttribute("aria-expanded", "false");
        document.getElementById("collapseone_btn").setAttribute("class", "accordion-button collapsed");
    }
}