import {
  FaMusic,
  FaBolt,
  FaLeaf,
  FaGuitar,
  FaMoon,
  FaMicrophoneAlt,
} from "react-icons/fa";
import React from "react";
import { IoBookmark } from "react-icons/io5";

// Aqui defino o interface n  esquecer
export interface CategoryItem {
  id: string;
  name: string;
  tag: string;
  icon: React.ReactNode;
}

export const CATEGORIES: CategoryItem[] = [
  { id: "all", name: "All", tag: "", icon: <FaMusic /> },
  {
    id: "favorites",
    name: "Favorites",
    tag: "favorites",
    icon: <IoBookmark />,
  },
  { id: "lofi", name: "Lofi", tag: "lofi", icon: <FaMoon /> },
  { id: "jazz", name: "Jazz", tag: "jazz", icon: <FaMusic /> },
  { id: "rock", name: "Rock", tag: "rock", icon: <FaGuitar /> },
  { id: "electronic", name: "Electronic", tag: "electronic", icon: <FaBolt /> },
  { id: "techno", name: "Techno", tag: "techno", icon: <FaBolt /> },
  { id: "ambient", name: "Ambient", tag: "ambient", icon: <FaLeaf /> },
  { id: "hiphop", name: "Hip Hop", tag: "hiphop", icon: <FaMicrophoneAlt /> },
  { id: "classical", name: "Classical", tag: "classical", icon: <FaMusic /> },
];
