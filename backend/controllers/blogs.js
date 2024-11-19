const Blogs = require("../models/Blogs.js");


// This is where i need to compress the image before saving it to database.
const createBlog = async (req, res) => {
    try {
        console.log('Creating post...');
        // const featured  = await compressImage(req.body.featured);
        const response = await Blogs.create({ ...req.body })
        if (response) {
            console.log("Created post : ", response.slug);
            res.status(200).json({ msg: "Post created successfully.", post: response.slug });
        } else {
            console.log("Error creating post.");
            res.status(203).json({ msg: "Error creating post." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const updateBlog = async (req, res) => {
    const { slug, post } = req.body;
    try {
        console.log("Checking if post exists: ", slug);
        const existingPost = await Blogs.findOne({ slug });
        if (!existingPost) {
            console.log("No post found with slug: ", slug);
            return res.status(404).json({ msg: "Post not found." });
        }

        console.log("Updating post: ", slug);
        let response = await Blogs.updateOne({ slug }, { ...post });
        console.log("Response: ", response);
        if (response.modifiedCount === 1) {
            console.log("Post updated: ", slug);
            res.status(200).json({ msg: "Post updated successfully." });
        } else {
            console.log("Error updating post: No changes made.");
            res.status(203).json({ msg: "Error updating post. No changes made." });
        }
    } catch (error) {
        console.log("Error updating post: ", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}



const deleteBlog = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await Blogs.deleteOne({ slug });
        if (response.deletedCount === 1) {
            console.log("Post deleted: ", slug);
            res.status(200).json({ msg: "Post deleted successfully." })
        } else {
            res.status(203).json({ msg: "Error deleting post." })
        }

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}


const getBlogCards = async (req, res) => {
    try {
        // Extract page number from request body with a default value of 1
        const page = parseInt(req.body.page) || 1;
        const limit = 6; // Fixed limit of 4 posts per page
        const skip = (page - 1) * limit;

        // Retrieve specific fields: author, location, title, featured
        let blogs = await Blogs.find({}, { author: 1, title: 1, featured: 1, contents: 1, slug: 1 })
            .sort({ _id: -1 }) // Reverse order by default
            .skip(skip)
            .limit(limit);

        // Process each blog to find the first content of type 'Paragraph'
        let processedBlogs = blogs.map(blog => {
            let paragraph = blog.contents.find(content => content.type === 'Paragraph');
            return {
                slug: blog.slug,
                author: blog.author,
                title: blog.title,
                featured: blog.featured,
                contents: paragraph
            };
        });
        // Apply pagination
        res.status(200).json(processedBlogs);
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

const getAllPostSlugs = async (req, res) => {
    try {
        let response = await Blogs.find({}).select('slug');
        let reversedRes = response.reverse();

        res.status(200).json(reversedRes);
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const getBlog = async (req, res) => {
    const { slug } = req.body;
    try {
        let response = await Blogs.findOne({ slug })
        if (response) {
            res.status(200).json({ response });
        } else {
            res.status(203).json({ msg: "Unable to fetch data." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}




module.exports = { createBlog, updateBlog, deleteBlog, getBlogCards, getAllPostSlugs, getBlog };
