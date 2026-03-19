import { 
  FaMusic, 
  FaBolt, 
  FaLeaf, 
  FaGuitar, 
  FaMoon, 

  FaMicrophoneAlt
} from "react-icons/fa"; // Importa tudo do mesmo pacote 'fa'
import React from "react";

// 1. Definimos a interface aqui
export interface CategoryItem {
  id: string;
  name: string;
  tag: string;
  icon: React.ReactNode;
}

// 2. Criamos o array usando essa interface
export const CATEGORIES: CategoryItem[] = [
   { id: 'all', name: 'All', tag: '', icon: <FaMusic /> },
  { id: 'lofi', name: 'Lofi', tag: 'lofi', icon: <FaMoon /> }, // Tag muito forte na API
  { id: 'chill', name: 'Chill', tag: 'chillout', icon: <FaLeaf /> }, // Tag: chillout
  { id: 'jazz', name: 'Jazz', tag: 'jazz', icon:<FaMusic /> },
  { id: 'rock', name: 'Rock', tag: 'rock', icon: <FaGuitar /> },
  { id: 'electronic', name: 'Electronic', tag: 'electronic', icon: <FaBolt /> },
  { id: 'techno', name: 'Techno', tag: 'techno', icon: <FaBolt /> },
  { id: 'ambient', name: 'Ambient', tag: 'ambient', icon: <FaLeaf /> },
  { id: 'hiphop', name: 'Hip Hop', tag: 'hiphop', icon: <FaMicrophoneAlt /> },
  { id: 'classical', name: 'Classical', tag: 'classical', icon: <FaMusic /> },
];
