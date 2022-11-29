import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

/*=============== BASE ===============*/
* {
 margin: 0;
 padding: 0;

}

body {
  font-family: var(--body-font);
  //color: var(--text-color);
}


/*=============== CARD ===============*/


/* Animation img */


/* Animation shape */
    :root {
      /*========== Colors ==========*/
      --color-red:red;
      --color-button: #53B4CF;
      --color-background: #ffffff;
      --color-border: #ccc;
      --color-hover: #367DD9;
      --color-text: #000;
      --color-gray-text: #999;
      --color-background-geral: #eee;
      --color-comments: #333;
      --title-color: #fff;
      --text-color: hsl(235, 20%, 57%);
      --shape-gradient: linear-gradient(90deg, 
                    hsl(300, 76%, 60%),
                    hsl(57, 81%, 60%));
      --body-gradient: linear-gradient(180deg, 
                hsl(22, 100%, 84%),
                hsl(265, 100%, 80%));
     --container-color: hsl(235, 32%, 10%);
      /*========== Font and typography ==========*/
  --body-font: 'Poppins', sans-serif;
  --biggest-font-size: 2.25rem;
  --normal-font-size: 1.25rem;
  

    }
    `
        
