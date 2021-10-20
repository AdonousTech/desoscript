import { IProjectActivity } from "./i-project-activity";
import { IProjectRoadmap } from "./i-project-roadmap";

/**
 * BitClout Project 
 * @export
 * @interface IProject
 */
 export interface IProject {
    ProjectId: string;
    ProjectPublicKey: string;
    ProjectLink: string;
    ProjectImageUrl: string;
    ProjectBirthdate: string;
    ProjectDescription: string;
    ProjectGoal: string;
    ProjectStatus: 'Active' | 'Inactive';
    Roadmap: IProjectRoadmap
    Activities: IProjectActivity[]
}