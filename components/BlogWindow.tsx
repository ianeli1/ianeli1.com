import {
  MouseEventHandler,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Transition } from "react-transition-group";
import { BlogViewer } from "./BlogViewer";
import { PostData } from "../utils/posts";
import { darkCtx } from "./context/useDarkTheme";

interface BWProps {
  show: boolean;
  onClose: () => void;
  id?: string;
}

const transitionStyles = {
  entering: "",
  entered: "",
  exiting: ["opacity-0", "translate-x-full"],
  exited: ["opacity-0 pointer-events-none", "translate-x-full"],
};

export default function BlogWindow({ show, onClose, id }: BWProps) {
  const [post, setPost] = useState<PostData>();

  const [{ dark }] = useContext(darkCtx);

  const onEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("keydown", onEsc);
    };
  }, [onEsc]);

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
          console.log(`got data`, data);
        });
  }, [id]);

  const onHide: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <Transition in={show} timeout={1000}>
      {(state) => (
        <main
          className={` fixed z-50 left-0 bg-gray-500 bg-opacity-75 top-0 bottom-0 h-full w-full transition duration-700 ${transitionStyles[state][0]}`}
          onClick={onHide}
        >
          <section
            className={`absolute overflow-y-auto top-0 bottom-0 right-0 w-4/5 h-full p-2 ${
              dark ? "bg-gray-900" : "bg-gray-50"
            } shadow transform duration-700 ${transitionStyles[state][1]}`}
          >
            {post ? (
              <BlogViewer article={post.contentHtml} {...post} />
            ) : (
              "loading"
            )}
          </section>
        </main>
      )}
    </Transition>
  );
}
