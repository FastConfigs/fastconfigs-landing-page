import FooterFile from "../files/footer.file";
const FooterComponent = ({footer_img, copyRight, text}) => {
      const footer = [
          {footer_img, copyRight, text}
      ]

      return (
          <FooterFile footer = {footer} footer_img = "./image/FastConfigs.png" text= "FastConfig" copyRight = "@CopyRight 2022"/>
      )

}
export default FooterComponent