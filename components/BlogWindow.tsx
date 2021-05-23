import { MouseEventHandler, useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import { BlogViewer } from "./BlogViewer";
import { PostData } from "../utils/posts";

interface BWProps {
  show: boolean;
  onClose: () => void;
  id?: string;
}

const transitionStyles = {
  entering: "",
  entered: "",
  exiting: ["opacity-0", "translate-x-full"],
  exited: ["opacity-0", "translate-x-full"],
};

export default function BlogWindow({ show, onClose, id }: BWProps) {
  const [post, setPost] = useState<PostData>();

  useEffect(() => {
    id &&
      fetch(`/api/blog/${id}`)
        .then((data) => data.json())
        .then((data) => {
          if (data.error) {
            //oops
            return;
          }
          setPost(data);
        });
  }, [id]);

  const onHide: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <Transition unmountOnExit in={show} timeout={300}>
      {(state) => {
        <main
          className={`fixed z-50 left-0 top-0 bottom-0 h-full w-full transition ${transitionStyles[state][0]}`}
          onClick={onHide}
        >
          <section
            className={`absolute top-0 bottom-0 right-0 w-4/5 h-full p-2 bg-gray-50 shadow transform ${transitionStyles[state][1]}`}
          >
            {post ? (
              <BlogViewer article={post.contentHtml} {...post} />
            ) : (
              "loading"
            )}
          </section>
        </main>;
      }}
    </Transition>
  );
}
