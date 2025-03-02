import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import NoteCard from "../components/NoteCard";
import LectureCard from "../components/LectureCard";
import AssignmentCard from "../components/AssignmentCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { notesData, lectureData, assignmentData } from "../data/index";

const DigitalNotesSpace = () => {
  const [currentAssignmentIndex, setCurrentAssignmentIndex] = useState(0);
  const [currentNoteIndices, setCurrentNoteIndices] = useState(notesData.map(() => 0));
  const [currentLectureIndex, setCurrentLectureIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const totalAssignments = assignmentData.length;
  const totalLectures = lectureData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAssignmentIndex((prevIndex) => (prevIndex + 1) % totalAssignments);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <div className="hidden md:block w-56 bg-[#1E3A8A] text-white shadow-lg">
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-6 flex flex-col">
          <h1 className="text-blue-800 text-2xl font-bold mb-4">Digital Notes Space</h1>
          
          <div className="flex items-center mb-4"> {/* Added margin-bottom */}
            <FontAwesomeIcon icon={faClipboardList} className="text-blue-600 mr-2" />
            <span className="text-blue-800 font-bold">Notes</span>
          </div>

          <Tabs />

          {notesData.map((subject, subjectIndex) => (
            <section key={subjectIndex} className="relative mb-8"> {/* Added margin-bottom */}
              <h2 className="text-xl text-blue-800 font-bold mb-3">{subject.subject}</h2>
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-out"
                  style={{
                    transform: `translateX(-${currentNoteIndices[subjectIndex] * 50}%)`,
                  }}
                >
                  {subject.notes.map((note, noteIndex) => (
                    <div
                      key={noteIndex}
                      className="min-w-[50%] pr-3 pl-0.5 transition-opacity duration-300 ease-out"
                      style={{
                        opacity:
                          noteIndex >= currentNoteIndices[subjectIndex] &&
                          noteIndex < currentNoteIndices[subjectIndex] + 2
                            ? 1
                            : 0.5,
                      }}
                    >
                      <NoteCard {...note} />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setCurrentNoteIndices((prevIndices) => {
                      const newIndices = [...prevIndices];
                      newIndices[subjectIndex] =
                        (newIndices[subjectIndex] + 1) %
                        notesData[subjectIndex].notes.length;
                      return newIndices;
                    })
                  }
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-20"
                  aria-label="Next notes"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-blue-600" />
                </button>
              </div>
            </section>
          ))}

          <section className="relative mb-8"> {/* Added margin-bottom */}
            <h2 className="text-xl text-blue-800 font-bold mb-3">Lecture Videos</h2>
            <Tabs />
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${currentLectureIndex * 33.33}%)`,
                }}
              >
                {lectureData.map((lecture, index) => (
                  <div
                    key={index}
                    className="min-w-[50%] pr-3 pl-0.5 transition-opacity duration-300 ease-out"
                    style={{
                      opacity:
                        index >= currentLectureIndex && index < currentLectureIndex + 3
                          ? 1
                          : 0.5,
                    }}
                  >
                    <LectureCard {...lecture} />
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentLectureIndex((prevIndex) => (prevIndex + 1) % totalLectures)
                }
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-20"
                aria-label="Next lectures"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-blue-600" />
              </button>
            </div>
          </section>

          <section className="relative"> {/* No margin needed here as it's the last section */}
            <h2 className="text-xl text-blue-800 font-bold mb-3">Assignments</h2>
            <Tabs />
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${currentAssignmentIndex * 33.33}%)`,
                }}
              >
                {[...assignmentData, ...assignmentData]
                  .slice(0, totalAssignments + 4)
                  .map((assignment, index) => (
                    <div
                      key={index}
                      className="min-w-[33.33%] pr-3 pl-0.5 transition-opacity duration-300 ease-out"
                      style={{
                        opacity:
                          index >= currentAssignmentIndex &&
                          index < currentAssignmentIndex + 3
                            ? 1
                            : 0.5,
                      }}
                    >
                      <AssignmentCard {...assignment} />
                    </div>
                  ))}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/6 backdrop-blur-md pointer-events-none z-10" />
              <button
                onClick={() =>
                  setCurrentAssignmentIndex((prevIndex) => (prevIndex + 1) % totalAssignments)
                }
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-20"
                aria-label="Next assignments"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-blue-600" />
              </button>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default DigitalNotesSpace;