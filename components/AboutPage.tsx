import Link from "next/link";
import { Heart, Shield, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const team = [
    {
        name: 'Lluvia Ayala',
        role: 'Owner',
        bio: 'With over 12 years in the cleaning industry, Lluvia founded Clean Home Pros with a vision of combining professional standards with genuine care. She oversees daily operations and ensures every client gets a five-star experience.',

    }
];

const values = [
    {
        icon: <Shield size={24} style={{ color: "#047A95" }} />,
        title: 'Trust & Integrity',
        desc: 'Every team member is background-checked, insured, and held to the highest professional standards.',
    },
    {
        icon: <Heart size={24} style={{ color: "#047A95" }} />,
        title: 'Care in Every Detail',
        desc: 'We treat your home as if it were our home - with respect, thoroughness, and genuine pride in our work.',
    },
    {
        icon: <Clock size={24} style={{ color: "#047A95" }} />,
        title: 'Reliability You Can Count On',
        desc: 'We show up on time, every time. Your schedule matters to us, and we honor every commitment.',
    },
];

export function AboutPage() {
    return (
        <div>
            
        </div>
    )
}