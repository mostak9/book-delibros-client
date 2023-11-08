

const OurBlog = () => {
    return (
        <div className="py-11 px-5 md:px-0 mt-11">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-3">Our <span className="text-primary-color">Blog</span></h1>
                <hr className="max-w-[100px] border-2 border-primary-color mx-auto" />
                <p className=" max-w-lg mx-auto mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="px-8 py-10 space-y-5 shadow-2xl">
                    <h1 className="text-xl font-bold"><span className="text-primary-color">Personalized Reading:</span> Customizing Your Bookshelf</h1>
                    <p> Learn how to curate your ideal reading list from our extensive digital library, tailored just for you.</p>
                    <div className="divider"></div>
                    <p>Jul 22, 2023</p>
                </div>
                <div className="px-8 py-10 space-y-5 shadow-2xl">
                    <h1 className="text-xl font-bold"><span className="text-primary-color">Author Spotlights:</span> Stories Behind the Stories</h1>
                    <p> Explore the rich variety of books in our online library, spanning genres and themes to cater to every reader's taste</p>
                    <div className="divider"></div>
                    <p>Jul 22, 2023</p>
                </div>
                <div className="px-8 py-10 space-y-5 shadow-2xl">
                    <h1 className="text-xl font-bold"><span className="text-primary-color">Diverse Reads:</span> Navigating Our Library Collection</h1>
                    <p>Discover the fascinating backgrounds and inspirations of the authors who have contributed to our virtual library</p>
                    <div className="divider"></div>
                    <p>Jul 22, 2023</p>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;