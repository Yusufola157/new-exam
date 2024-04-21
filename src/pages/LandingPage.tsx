import React, {
	useState,
	useEffect,
} from "react";
import { Link } from "react-router-dom";
import RepoCard from "../props/RepoCard";
import { fetchRepositories } from "../../api/api";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import CreateRepoForm from "./CreateRepo";
import dotenv from 'dotenv';
dotenv.config();

const LandingPage: React.FC =
	() => {
		//states
		const [
			repos,
			setRepos,
		] =
			useState(
				[]
			);
		const [
			loading,
			setLoading,
		] =
			useState(
				true
			);
		const [
			searchTerm,
			setSearchTerm,
		] =
			useState(
				""
			);
		const [
			filteredRepos,
			setFilteredRepos,
		] =
			useState(
				[]
			);
		const [
			currentPage,
			setCurrentPage,
		] =
			useState(
				1
			);
		const [
			reposPerPage,
		] =
			useState(
				3
			);
		const [
			show,
			setShow,
		] =
			useState(
				true
			);

		const togleBtn =
			() => {
				setShow(
					!show
				);
			};
		//useEffect
		useEffect(() => {
			fetchRepositories().then(
				(
					data
				) => {
					setRepos(
						data
					);
					setLoading(
						false
					);
				}
			);
		}, []);

		const handleDelete =
			async () => {
				// Implement deletion logic here...
				console.log(
					"Repository deleted"
				);
				// You may want to refetch repositories after deletion
			};

		useEffect(() => {
			const filtered =
				repos.filter(
					(
						repo: any
					) =>
						repo.name
							.toLowerCase()
							.includes(
								searchTerm.toLowerCase()
							)
				);
			setFilteredRepos(
				filtered
			);
		}, [
			searchTerm,
			repos,
		]);

		//pagination
		const indexOfLastRepo =
			currentPage *
			reposPerPage;
		const indexOfFirstRepo =
			indexOfLastRepo -
			reposPerPage;
		const currentRepos =
			filteredRepos.slice(
				indexOfFirstRepo,
				indexOfLastRepo
			);

		const paginate =
			(
				pageNumber: number
			) =>
				setCurrentPage(
					pageNumber
				);

		if (
			loading
		)
			return (
				<div>
					Loading...
				</div>
			);

		return (
			<div className="w-[100%] py-[50px] flex justify-center items-center flex-col">
				<div className="flex flex-col items-center mb-[50px]">
					<div className="text-[23px] tracking-widest">
						I
						DONT
						STOP
						MY
						PAST.
						I
						LIKE
						NEW
						WORK
					</div>
					<div className="text-[20px] tracking-widest">
						I
						LIKE
						WHAT
						IM
						DOING
						TOMORROW
					</div>
				</div>
				{/* <div> */}
				{/* </div> */}
				<div className="relative w-[100%] h-[450px]">
					<div className="flex absolute left-[10%]">
						<div
							className="bg-cover bg-center w-[150px] h-[180px] mt-[20px] filter grayscale-[10]"
							style={{
								backgroundImage: `url(${p1})`,
							}}
						></div>
						<div className="flex justify-start mx-[10px]">
							<div
								className="bg-cover bg-center w-[250px] h-[250px] mr-[10px] filter grayscale-[10]"
								style={{
									backgroundImage: `url(${p4})`,
								}}
							></div>
							<div
								className="bg-cover bg-center w-[250px] h-[350px] mr-[10px] filter grayscale-[10]"
								style={{
									backgroundImage: `url(${p5})`,
								}}
							></div>
							<div
								className="bg-cover bg-center w-[250px] h-[250px] filter grayscale-[10]"
								style={{
									backgroundImage: `url(${p3})`,
								}}
							></div>
						</div>
						<div
							className="bg-cover bg-center w-[150px] h-[180px] mt-[20px] filter grayscale-[10]"
							style={{
								backgroundImage: `url(${p2})`,
							}}
						></div>
					</div>
					<div className="absolute text-white text-[100px] left-[20%] tracking-widest">
						LANDING
						PAGE
					</div>
				</div>
				<div className="w-[100%] flex justify-between items-center">
					<div className="w-[400px] h-[450px] p-[15px] bg-[#757575a1] flex flex-col">
						<div className="text-[20px] font-semibold tracking-widest mb-[20px]">
							ABOUT
							THE
							PROJECT
						</div>
						<div className="text-[14px] mt-[100px]">
							Creating
							a
							web
							application
							that
							consumes
							the
							GitHub
							API
							to
							fetch
							all
							repo
							and
							allows
							users
							to
							search
							anfd
							filter
							through
							them
							is
							a
							great
							project
							for
							learning
							how
							to
							integrate
							APIs
							into
							your
							applications.
							By
							leveraging
							GitHub's
							API,
							users
							can
							explore
							repo
							based
							on
							various
							criteria,
							enhancing
							their
							experiencer
							and
							facilitating
							efficient
							navigation
							through
							the
							vast
							array
							of
							available
							projects.
						</div>
					</div>
					<div className="flex flex-col w-[850px]  h-[450px] px-[5px]">
						<div className="w-[100%] flex justify-end mb-[20px]">
							<div className="flex ">
								<div
									className="w-[200px] h-[40px] rounded-[10px] bg-[green] text-white mr-[10px] flex justify-center items-center cursor-pointer"
									onClick={
										togleBtn
									}
								>
									New
									Repo
								</div>
								<div className="w-[100px] h-[40px] rounded-[10px] bg-[red] text-white mr-[10px] flex justify-center items-center cursor-pointer">
									<Link to="/notfound">
										Not-Found
									</Link>
								</div>
								<div className="w-[200px] h-[40px] rounded-[10px] bg-[blue] text-white mr-[10px] flex justify-center items-center cursor-pointer">
									<Link to="/error">
										Error
										Boundary
									</Link>
								</div>
							</div>
							<div className="mb-4">
								<input
									type="text"
									placeholder="Search repositories..."
									value={
										searchTerm
									}
									onChange={(
										e
									) =>
										setSearchTerm(
											e
												.target
												.value
										)
									}
									className="border p-2 rounded-md mr-2"
								/>
							</div>
							<div className="text-[20px] mr-[5px] mb-[20px]">
								Repository
							</div>
						</div>
						{show ? (
							<div className="flex w-[100%] h-[100%] flex-col justify-between">
								<div className="flex w-[100%] justify-center">
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										{currentRepos.map(
											(
												repo: any
											) => (
												<Link
													key={
														repo.id
													}
													to={`/repos/${repo.id}`}
												>
													<RepoCard
														repo={
															repo
														}
														accessToken = {process.env.REACT_APP_ACCESS_KEY}
														
														onDelete={
															handleDelete
														}
													/>
												</Link>
											)
										)}
									</div>
								</div>
								<div className="mt-4">
									<Pagination
										reposPerPage={
											reposPerPage
										}
										totalRepos={
											filteredRepos.length
										}
										currentPage={
											currentPage
										}
										paginate={
											paginate
										}
									/>
								</div>
							</div>
						) : (
							<CreateRepoForm
								onSuccess={
									fetchRepositories
								}
							/>
						)}
					</div>
				</div>
			</div>
		);
	};
interface PaginationProps {
	reposPerPage: number;
	totalRepos: number;
	currentPage: number;
	paginate: (
		number: number
	) => void;
}

const Pagination: React.FC<
	PaginationProps
> = ({
	reposPerPage,
	totalRepos,
	currentPage,
	paginate,
}) => {
	const pageNumbers =
		[];
	const totalPages =
		Math.ceil(
			totalRepos /
				reposPerPage
		);

	for (
		let i = 1;
		i <=
		totalPages;
		i++
	) {
		pageNumbers.push(
			i
		);
	}

	return (
		<nav>
			<ul className="pagination flex">
				<li
					className={`${
						currentPage ===
						1
							? "page-item disabled"
							: "page-item"
					}`}
				>
					{currentPage >=
					2 ? (
						<button
							onClick={() =>
								paginate(
									currentPage -
										1
								)
							}
							className={`page-link w-[100px] h-[40px] flex justify-center items-center bg-[#585858] ${
								currentPage ===
								1
									? "page-item"
									: "page-item"
							}`}
						>
							Previous
						</button>
					) : (
						<button
							// onClick={() => paginate(currentPage - 1)}
							className={`page-link text-white w-[100px] h-[40px] flex justify-center items-center cursor-not-allowed bg-[#918f8fea] ${
								currentPage ===
								1
									? "page-item"
									: "page-item"
							}`}
						>
							Previous
						</button>
					)}
				</li>
				{pageNumbers.map(
					(
						number
					) => (
						<li
							key={
								number
							}
							className={
								number ===
								currentPage
									? "page-item active text-[red] bg-[#ff000079] w-[30px] h-[40px] flex justify-center items-center"
									: "page-item text-[blue] bg-[#0000ff3b] w-[30px] h-[40px] flex justify-center items-center"
							}
						>
							<button
								onClick={() =>
									paginate(
										number
									)
								}
								className="page-link"
							>
								{
									number
								}
							</button>
						</li>
					)
				)}
				<li
					className={
						currentPage ===
						totalPages
							? "page-item disabled"
							: "page-item"
					}
				>
					<button
						onClick={() =>
							paginate(
								currentPage +
									1
							)
						}
						className={`page-link w-[100px] h-[40px] flex justify-center items-center bg-[#585858] ${
							currentPage ===
							totalPages
								? "cursor-not-allowed"
								: ""
						}`}
						disabled={
							currentPage ===
							totalPages
						}
					>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
};
export default LandingPage;
