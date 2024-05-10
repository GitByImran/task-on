"use client";

import React, { useEffect, useRef, useState } from "react";
import { ImagePlus, PenSquare } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import ImageUploader from "@/components/imageUploader";
import { Teams_List } from "@/lib/teamsList";
import uploadImageToImgBB from "@/utils/imageUploader";
import Loader from "@/components/loader";

const CreateTaskPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [removeSelectedFile, setRemoveSelectedFile] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    brief: "",
  });

  const handleImageUpload = (file: File) => {
    console.log("Uploaded file:", file);
    setSelectedFile(file);
  };

  const handleTeamSelection = (teamLabel: string) => {
    setSelectedTeams((prevSelectedTeams: any) => {
      if (prevSelectedTeams.includes(teamLabel)) {
        return prevSelectedTeams.filter((team: any) => team !== teamLabel);
      } else {
        return [...prevSelectedTeams, teamLabel];
      }
    });
  };

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Upload image to ImgBB
    try {
      const imageURL = selectedFile
        ? await uploadImageToImgBB(selectedFile)
        : null;
      if (!imageURL) {
        throw new Error("Failed to upload image");
      }

      // Prepare task data
      const newTask = {
        title: formData.title,
        deadline: formData.deadline,
        brief: formData.brief,
        teams: selectedTeams,
        image: imageURL,
      };

      // Make POST request to server
      const response = await fetch("/api/database/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`Failed to create task: ${response.statusText}`);
      }

      // Reset form and state
      setFormData({
        title: "",
        deadline: "",
        brief: "",
      });
      formRef.current?.reset();
      setSelectedTeams([]);
      setSelectedFile(null);
      setRemoveSelectedFile(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  const isFormFilled = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  return (
    <div className="space-y-8 p-4">
      <div className="flex items-center gap-2  px-3 text-lg text-accent-foreground">
        <PenSquare size={20} strokeWidth={2} />
        <span className="text-xl font-bold text-accent-foreground">
          Create Task
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-4">
        <div className="col-span-1 md:col-span-2">
          <form ref={formRef} className="" onSubmit={handleSubmit}>
            <div className="max-w-full space-y-4">
              <ImageUploader
                onImageUpload={handleImageUpload}
                removeSelectedFile={removeSelectedFile}
              />

              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm">
                  Set task title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="border outline-slate-600 px-2 py-1"
                  required={true}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="brief" className="text-sm">
                  Set task brief
                </label>
                <textarea
                  name="brief"
                  id="brief"
                  rows={3}
                  value={formData.brief}
                  onChange={handleFormChange}
                  className="border outline-slate-600 px-2 py-1"
                  required={true}
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="deadline" className="text-sm">
                  Set task deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleFormChange}
                  className="border outline-slate-600 px-2 py-1"
                  required={true}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm">Select teams to assign task</label>
                <div className="flex flex-wrap items-center gap-2">
                  {Teams_List.map((team: any) => (
                    <div key={team.label} className="flex items-center">
                      <input
                        type="checkbox"
                        id={team.label}
                        onChange={() => handleTeamSelection(team.label)}
                        className="mr-2"
                      />
                      <label htmlFor={team.label} className="cursor-pointer">
                        {team.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className={`px-4 py-2 bg-cyan-600 hover:bg-cyan-800 capitalize text-white rounded flex items-center gap-4 ${
                  selectedFile &&
                  selectedTeams.length >= 1 &&
                  formData.deadline.trim() !== "" &&
                  formData.title.trim() !== "" &&
                  formData.brief.trim() !== "" &&
                  formData.brief.trim() !== ""
                    ? "cursor-pointer"
                    : "pointer-events-none"
                }`}
              >
                Submit {isLoading && <Loader />}
              </button>
            </div>
          </form>
        </div>
        {/* Preview Section */}
        <div className="col-span-1">
          <div className="border rounded-lg overflow-hidden shadow">
            <div className="flex items-center gap-2">
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  className="h-60 w-full object-cover"
                />
              ) : (
                <div className="h-60 bg-gray-200 animate-pulse w-full"></div>
              )}
            </div>
            <div className="space-y-4 p-4">
              {formData.title.trim() !== "" ? (
                <p className="text-sm">
                  <span className="mr-1 font-semibold whitespace-nowrap">
                    Title :
                  </span>
                  {formData.title}
                </p>
              ) : (
                <div className="h-6 bg-gray-200 rounded animate-pulse w-full"></div>
              )}
              {formData.brief.trim() !== "" ? (
                <p className="text-sm">
                  <span className="mr-1 font-semibold whitespace-nowrap">
                    Brief :
                  </span>
                  {formData.brief.length > 100
                    ? `${formData.brief.slice(0, 200)}...`
                    : formData.brief}
                </p>
              ) : (
                <div className="h-6 bg-gray-200 rounded animate-pulse w-full"></div>
              )}
              {formData.deadline.trim() !== "" ? (
                <p className="text-sm">
                  <span className="mr-1 font-semibold whitespace-nowrap">
                    Deadline :
                  </span>
                  {formData.deadline}
                </p>
              ) : (
                <div className="h-6 bg-gray-200 rounded animate-pulse w-full"></div>
              )}
              {selectedTeams.length >= 1 ? (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold whitespace-nowrap">
                    Assign to :
                  </span>
                  {selectedTeams.map((item, index) => (
                    <p className="border px-2 py-1 text-sm" key={index}>
                      {item}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-4">
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-full"></div>
                </div>
              )}
              {selectedFile &&
                selectedTeams.length >= 1 &&
                formData.deadline.trim() !== "" &&
                formData.title.trim() !== "" &&
                formData.brief.trim() !== "" &&
                formData.brief.trim() !== "" && (
                  <div className="flex flex-wrap items-center gap-2">
                    <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-800 text-sm capitalize text-white rounded">
                      Details
                    </button>
                    <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-800 text-sm capitalize text-white rounded">
                      Accept
                    </button>
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-800 text-sm capitalize text-white rounded">
                      Deny
                    </button>
                  </div>
                )}
              <p className="text-sm text-muted-foreground">
                * This preview will show how task post will look like!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskPage;


