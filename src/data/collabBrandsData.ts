import collab1 from "../assets/collabs/collab (1).png";
import collab2 from "../assets/collabs/collab (2).png";
import collab3 from "../assets/collabs/collab (3).png";
import collab4 from "../assets/collabs/collab (4).png";
import collab5 from "../assets/collabs/collab (5).png";
import collab6 from "../assets/collabs/collab (6).png";

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
