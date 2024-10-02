import { Typography } from "@material-tailwind/react";
import GlassCard from "../components/glass3d-card";
import G1 from "../assets/image/books/g1.webp";
import G2 from "../assets/image/books/g2.jpg";
import G3 from "../assets/image/books/g3.png";

const BOOKS = [
  {
    img: G1,
    glb: `../assets/image/glasses/glasses.glb`,
    category: "Glasses 1",
    title: "Glasses 1",
  },
  {
    img: G2,
    glb: `../assets/image/glasses/gla1.glb`,
    category: "Glasses  2",
    title: "Glasses 2",
  },
  {
    img: G3,
    glb: `../assets/image/glasses/gla2.glb`,
    category: "Glasses 2",
    title: "Glasses 3",
  },
  /*  {
    img: `../assets/image/books/g4.jpeg`,
    glb: `../assets/image/glasses/gla2.glb`,
    category: "Walter Pauk",
    title: "How to Study in College",
    desc: "A valuable resource for high school seniors and college freshmen, offering effective study strategies.",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `../assets/image/books/g5.jpeg`,
    glb: `../assets/image/glasses/gla4.glb`,
    category: "William Strunk Jr.",
    title: "The Elements of Style",
    desc: "A classic reference book on grammar and writing skills, essential for high school and college students.",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `../assets/image/books/g6.jpeg`,
    glb: `../assets/image/glasses/gla4.glb`,
    category: "William Strunk Jr.",
    title: "The Elements of Style",
    desc: "A classic reference book on grammar and writing skills, essential for high school and college students.",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `../assets/image/books/g7.jpeg`,
    glb: `../assets/image/glasses/gla6.glb`,
    category: "William Strunk Jr.",
    title: "The Elements of Style",
    desc: "A classic reference book on grammar and writing skills, essential for high school and college students.",
    price: "$99",
    offPrice: "$79",
  },
  {
    img: `../assets/image/books/g9.jpg`,
    glb: `../assets/image/glasses/gla7.glb`,
    category: "William Strunk Jr.",
    title: "The Elements of Style",
    desc: "A classic reference book on grammar and writing skills, essential for high school and college students.",
    price: "$99",
    offPrice: "$79",
  }, */
];

export function BackToSchoolBooks() {
  return (
    <section className="px-8 pt-20 pb-10">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Back-to-School Glasses
        </Typography>

        <div className="mt-20 flex items-center justify-center">
          {/* <Tabs value={activeTab} className="w-full lg:w-8/12">
            <TabsHeader
              className="h-12 bg-transparent"
              indicatorProps={{
                className: "!bg-gray-900 rounded-lg",
              }}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {BOOKS_TABS.map((book) => (
                <Tab
                  key={book}
                  value={book}
                  className={`!font-medium capitalize transition-all duration-300
                    ${activeTab === book ? "text-white" : "capitalize"}
                  `}
                  onClick={() => setActiveTab(book)}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {book}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs> */}
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {BOOKS.map((props, key) => (
          <GlassCard key={key} {...props} />
        ))}
      </div>
    </section>
  );
}

export default BackToSchoolBooks;
