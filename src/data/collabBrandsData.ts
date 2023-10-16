import collab1 from "../assets/collabs/image00001.png";
import collab2 from "../assets/collabs/image00002.jpg";
import collab3 from "../assets/collabs/image00003.png";
import collab4 from "../assets/collabs/image00004.png";
import collab5 from "../assets/collabs/image00005.png";
import collab6 from "../assets/collabs/image00006.jpg";

export interface CollabBrandsData {
  img: any;
  alt?: string;
}
const collabBrandsData: CollabBrandsData[] = [
  {
    img: collab1,
  },
  {
    img: collab2,
  },
  {
    img: collab3,
  },
  {
    img: collab4,
  },
  {
    img: collab5,
  },
  {
    img: collab6,
  },
];
export default collabBrandsData;
