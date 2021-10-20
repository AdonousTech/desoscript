import { IProjectRoadmapEntry } from "./i-project-roadmap-entry";

export interface IProjectRoadmap {
    RoadMapId: string;
    ProjectId: string;
    ProjectName: string;
    Entries: IProjectRoadmapEntry[];
}