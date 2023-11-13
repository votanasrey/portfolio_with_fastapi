import React from "react";
import python from "../../../assets/python.png";
import fastapi from "../../../assets/fastapi.png";
import sql from "../../../assets/sql.png";
import memegraph from "../../../assets/memegraph.png";
import dremio from "../../../assets/dremio.png";
import neo4j from "../../../assets/neo4j.png";
import powerbi from "../../../assets/powerbi.png";
import prefect from "../../../assets/prefect.jpeg";


import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import postgres from "../../../assets/postgres.png";
import docker from "../../../assets/docker.png";

import { Link as ScrollLink } from "react-scroll";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: fastapi,
      title: "FastAPI",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: sql,
      title: "SQL",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: memegraph,
      title: "Memegraph",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      src: dremio,
      title: "Dremio",
      style: "shadow-emerald-500",
    },
    {
      id: 6,
      src: neo4j,
      title: "Neo4J",
      style: "shadow-cyan-700",
    },
    {
      id: 7,
      src: powerbi,
      title: "MS Power BI",
      style: "shadow-lime-400",
    },
    {
      id: 8,
      src: prefect,
      title: "Prefect",
      style: "shadow-white",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 11,
      src: postgres,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: docker,
      title: "Docker",
      style: "shadow-violet-700",
    },
  ];

  return (
    <section
      name="Technologies"
      className="relative w-full md:h-screen h-unset"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
            Technologies
          </h2>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-20 mx-auto py-2 md:py-4" src={src} alt="" />
              <p className="mt-4 md:mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Certificate"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Techs;
