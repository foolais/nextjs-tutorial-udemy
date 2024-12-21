import NavBack from "@/components/nav-back";
import { storePost } from "@/lib/post";

export default function NewPostsPage() {
  async function createPost(formData) {
    "use server";
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    storePost({
      imageUrl: "",
      title,
      content,
      userId: 1,
    });
  }
  return (
    <>
      <header>
        <NavBack text="Back to all posts" />
        <h1 className="text-heading my-6">
          <span className="text-primary">Create</span> a new post
        </h1>
      </header>
      <main>
        <form action={createPost} className="w-10/12">
          <p className="input-container">
            <label htmlFor="title" className="input-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="input-field"
            />
          </p>
          <p className="input-container">
            <label htmlFor="image" className="input-label">
              Image URL
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              id="image"
              name="image"
              className="input-field"
            />
          </p>
          <p className="input-container">
            <label htmlFor="content" className="input-label">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows="5"
              className="input-field"
            />
          </p>
          <p className="flex gap-8 justify-end mt-8">
            <button type="reset" className="hover:text-primary font-semibold">
              Reset
            </button>
            <button className="btn-primary">Create Post</button>
          </p>
        </form>
      </main>
    </>
  );
}
