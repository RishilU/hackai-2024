import { Box, Typography, useMediaQuery, Paper } from "@mui/material";
import "@fontsource/hind-siliguri";
import Footer from './Footer'; 
const sponsorDir = "sponsers"
const sponsorLogos = [["mavs-logo.png", "AWS_logo_RGB.svg", "RISE1.png"],
            ["Jasper.svg", "richardson-iq-logo.png", "geico.svg"], 
            ["respell.svg", "TT.svg",  "Blackstone.png" ],
            ["JSOM.svg", "CAIML.svg", "re-vvive-logo.png"] ]   
const sponsorLinks =  [
              "https://www.mavs.com/",
              "https://aws.amazon.com/machine-learning/",
              "https://jindal.utdallas.edu/centers-of-excellence/retail-innovation-strategy-excellence/",
              "https://www.jasper.ai/",
              "https://richardsoniq.com",
              "https://careers.geico.com/us/en/c/information-technology-jobs",
              "https://respell.ai/",
              "https://techtitans.org/",
              "https://innovation.utdallas.edu/programs/blackstone-launchpad/",
              "https://jindal.utdallas.edu/",
              "https://cs.utdallas.edu/caiml/",
              "https://re-vive.com/",
            ]
const sponsorPaths = sponsorLogos.map((row) => row.map((path) => sponsorDir + '/' + path))

function displaySponsors() {
  const mobile = useMediaQuery('(max-width:1023px)')

  return (
    sponsorPaths.map((row, rowIndex) => {
      return (
        <Box sx={ mobile ? {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        } : {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}>
          {row.map( (imgPath, colIndex) => 
            <img
              src={imgPath}
              onClick={() => window.open(sponsorLinks[rowIndex*3 + colIndex], "_blank")}
              className="object-contain [cursor:pointer] h-[20vh] w-[40vw] sm:w-[30vw] lg:w-[20vw] p-[5px]"
            />
          )}
        </Box>
      );
    })
  );
}

function Partners() {
  return (
    <div className="pt-[5rem] flex flex-col items-center">
      <div
        className="
          w-[75vw] max-w-[1024px] 
          p-[1rem]
          flex flex-col items-center
          bg-[url('/glass.svg')] bg-no-repeat bg-fill "
          style={{ backgroundSize: '80%', paddingBottom:0 }} // Adjust the paddingBottom to zero
      >
        <Typography className="pt-[1rem] pb-[3rem] xs:pb-[4rem] text-5xl font-placard tracking-widest font-bold text-hai-navy text-center">
          PAST PARTNERS
        </Typography>
        <div className="flex flex-col w-[100%]">
          {displaySponsors()}
        </div>
      </div>
    </div>
  );
}


export default Partners;