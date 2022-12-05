import HostionFile from "../files/hosting.file";

const HostionFileComponent = ({netlify, heroku}) => {
        const hostingPlateform = [
            {netlify , heroku}
        ]
       return (
           <div>
               <HostionFile  hostingPlateform = {hostingPlateform} heroku = "./image/Heroku.png" netlify = "./image/netlify.png"/>
           </div>
       )
}

export default HostionFileComponent