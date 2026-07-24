import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PillarCard = ({ icon: Icon, title, href, index = 0 }) => (
  <motion.div
    className="h-full"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.4, 0, 0.2, 1] }}
  >
    <Link
      to={href}
      className="pillar-card group flex h-full min-h-[4.75rem] gap-2.5 rounded-lg p-3.5 items-center"
    >
      <div className="text-text shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-text text-sm font-bold leading-snug font-display min-w-0 flex-1 [overflow-wrap:anywhere]">
        {title}
      </h2>
    </Link>
  </motion.div>
);

export default PillarCard;
