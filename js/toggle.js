(function (document) {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            //document ready
            let toggle_button = document.getElementById('toggle_button');
            toggle_button.addEventListener('click', toggle_nav);
        }
    };

    function process_transition() {
        let navbar_content = document.getElementById('navbarcontent');
        navbar_content.classList.add('inactive');
        navbar_content.classList.remove('process');

        navbar_content.children.item(0).removeEventListener('transitionend', process_transition);
    }

    function toggle_nav() {
        let navbar_content = document.getElementById('navbarcontent');

        if (navbar_content.classList.contains('inactive')) {
            navbar_content.classList.remove('inactive');
        }else {
            navbar_content.classList.add('process');

            navbar_content.children.item(0).addEventListener('transitionend', process_transition);
        }


    }
}(document))