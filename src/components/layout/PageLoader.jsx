import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const name = "NISHANT";

const PageLoader = ({ onComplete }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (visibleCount < name.length) {
      const timeout = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setHiding(true);
        setTimeout(onComplete, 600);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [visibleCount]);

  return (
    <AnimatePresence>
      {!hiding && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
        >
          <div className="flex items-end gap-1">
            {name.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  i < visibleCount
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.3 }}
                className="text-6xl font-black tracking-tight text-black"
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: visibleCount === name.length ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="mb-1 text-5xl font-black text-violet-600"
            >
              .
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;