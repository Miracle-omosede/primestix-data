"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const ProjectDetailClient = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // This is a client data fetching for the detail view.
  // Like I said, you can use server fetching if you like!

  useEffect(() => {
    const fetchDetailProject = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/project/${projectId}`);
        const data = await response.json();

        setProject(data);
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetailProject();
  }, [projectId]);

  return (
    <main className="min-h-screen flex items-center justify-center flex-col">
      {isLoading ? (
        <div>
          <BeatLoader color="#e8d5a1b8" />
        </div>
      ) : (
        <div className="p-4">
          <h2>This is the project details page. </h2>
          <h4>{JSON.stringify(project)}</h4>
          <Link className="text-[#cfba82]" href={"/projects"}>
            Go to product page here
          </Link>
        </div>
      )}
    </main>
  );
};

export default ProjectDetailClient;
