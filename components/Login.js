import React from "react";

function Login() {
	return (
		<div>
			<div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
				<div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
					<div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
						<div className="my-3 text-4xl font-bold tracking-wider text-center">
							<a href="#">K-WD</a>
						</div>
						<p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
							With the power of K-WD, you can now focus only on
							functionaries for your digital products, while
							leaving the UI design on us!
						</p>
						<p className="flex flex-col items-center justify-center mt-10 text-center">
							<span>Don&apos;t have an account?</span>
							<a href="#" className="underline">
								Get Started!
							</a>
						</p>
						<p className="mt-6 text-sm text-center text-gray-300">
							Read our{" "}
							<a href="#" className="underline">
								terms
							</a>{" "}
							and{" "}
							<a href="#" className="underline">
								conditions
							</a>
						</p>
					</div>
					<div className="p-5 bg-white md:flex-1">
						<h3 className="my-4 text-2xl font-semibold text-gray-700">
							Account Login
						</h3>
						<form action="#" className="flex flex-col space-y-5">
							<div className="flex flex-col space-y-1">
								<label
									htmlFor="email"
									className="text-sm font-semibold text-gray-500"
								>
									Email address
								</label>
								<input
									type="email"
									id="email"
									autoFocus
									className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
								/>
							</div>
							<div className="flex flex-col space-y-1">
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="text-sm font-semibold text-gray-500"
									>
										Password
									</label>
									<a
										href="#"
										className="text-sm text-blue-600 hover:underline focus:text-blue-800"
									>
										Forgot Password?
									</a>
								</div>
								<input
									type="password"
									id="password"
									className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
								/>
							</div>
							<div className="flex items-center space-x-2">
								<input
									type="checkbox"
									id="remember"
									className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
								/>
								<label
									htmlFor="remember"
									className="text-sm font-semibold text-gray-500"
								>
									Remember me
								</label>
							</div>
							<div>
								<a
									href="link-account"
									className="w-full px-4 py-2 text-lg
									font-semibold text-white transition-colors
									duration-300 bg-blue-500 rounded-md shadow
									hover:bg-blue-600 focus:outline-none
									focus:ring-blue-200 focus:ring-4"
								>
									Log in
								</a>
							</div>
							<div className="flex flex-col space-y-5">
								<span className="flex items-center justify-center space-x-2">
									<span className="h-px bg-gray-400 w-14"></span>
									<span className="font-normal text-gray-500">
										or login with
									</span>
									<span className="h-px bg-gray-400 w-14"></span>
								</span>
								<div className="flex flex-col space-y-4">
									<a
										href="#"
										className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-800 rounded-md group hover:bg-blue-800 focus:outline-none"
									>
										<span>
											<svg
												className="w-5 h-5 text-blue-800 fill-current group-hover:text-white"
												viewBox="0 0 16 16"
												version="1.1"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626
                                                    v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006
                                                    c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154
                                                    C167.657,37.881,130.125,0.349,83.829,0.349z"
												></path>
											</svg>
										</span>
										<span className="text-sm font-medium text-blue-800 group-hover:text-white">
											Facebook
										</span>
									</a>
									<a
										href="#"
										className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-red-500 rounded-md group hover:bg-red-500 focus:outline-none"
									>
										<span>
											<svg
												className="text-red-500 group-hover:text-white"
												width="20"
												height="20"
												fill="currentColor"
											>
												<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
											</svg>
										</span>
										<span className="text-sm font-medium text-red-500 group-hover:text-white">
											Youtube
										</span>
									</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
