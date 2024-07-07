export const set_samples_grid = () => {
    fetch('/get_samples')
        .then(response => response.text())
        .then(data => {
            const samplesAreaGrid = document.querySelector("#content .samples-area__grid");
            if (samplesAreaGrid) { 
                samplesAreaGrid.innerHTML = data;
                //console.log('Data assigned to innerHTML:', data);

                let samples = Array.from(document.getElementById("content").querySelectorAll(".sample"));
                let i = 0;

                samples.forEach((element) => {
                    let styles = element.style;

                    styles.visibility = 'visible';
                    styles.margin = '50px 0 0 0';
                    styles.opacity = '0';
                    styles.transition = 'all 0.5s ease-out';

                    setTimeout(() => {
                        styles.opacity = '1';
                        styles.margin = '0px 0 0 0';
                    }, 100+i*100);

                    i++;
                });
            } else {
                console.error("Element with class 'samples-area__grid' not found inside #content");
            }
        })
        .catch(error => console.error('Fetch error:', error));

    return;
}