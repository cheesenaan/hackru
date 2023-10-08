const Logo = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={230}
		height={48}
		fill="none"
		{...props}
	>
		<circle
			cx={24.193}
			cy={22.5}
			r={11.07}
			fill={props.isdark === "true" ? "#FFEFD0" : "#2B2822"}
			transform="rotate(141.207 24.193 22.5)"
		/>
		<circle
			cx={15.565}
			cy={29.436}
			r={11.07}
			fill="url(#a)"
			fillOpacity={props.isdark === "true" ? 0.7 : 0.4}
			transform="rotate(141.207 15.565 29.436)"
		/>
		<circle
			cx={32.822}
			cy={15.564}
			r={11.07}
			fill="url(#b)"
			fillOpacity={props.isdark === "true" ? 0.7 : 0.5}
			transform="rotate(141.207 32.822 15.564)"
		/>
		<path
			fill="url(#c)"
			d="M58.999 31V14.648h3.942a7.139 7.139 0 0 1 1.786.259 6.305 6.305 0 0 1 1.538.651 5.901 5.901 0 0 1 1.483 1.202 6.418 6.418 0 0 1 1.055 1.595 8 8 0 0 1 .584 1.74c.142.614.217 1.258.225 1.932v1.606c0 .651-.068 1.284-.202 1.898a7.875 7.875 0 0 1-.584 1.718 6.94 6.94 0 0 1-.955 1.494 5.913 5.913 0 0 1-1.28 1.168 6.07 6.07 0 0 1-1.662.786A7.318 7.318 0 0 1 62.94 31h-3.942Zm1.336-15.195v14.05h2.606a5.842 5.842 0 0 0 1.628-.259 4.8 4.8 0 0 0 1.325-.674c.405-.284.76-.628 1.067-1.033.307-.404.558-.85.753-1.336.18-.442.314-.91.404-1.404.098-.494.15-1 .157-1.516v-1.64a8.063 8.063 0 0 0-.168-1.538 7.322 7.322 0 0 0-.427-1.427 5.954 5.954 0 0 0-.91-1.493 4.402 4.402 0 0 0-1.336-1.1 4.565 4.565 0 0 0-1.145-.45 5.53 5.53 0 0 0-1.348-.18h-2.606Zm12.96 3.044h5.638v10.95h4.133V31h-9.77v-1.202h4.3V20.05h-4.3v-1.2Zm3.909-3.325c0-.142.018-.277.056-.404a.838.838 0 0 1 .19-.337.762.762 0 0 1 .315-.202c.127-.052.277-.079.45-.079.172 0 .321.027.449.08a.678.678 0 0 1 .303.201.86.86 0 0 1 .202.326c.045.127.067.266.067.415 0 .27-.082.502-.247.697-.165.194-.423.292-.775.292-.359 0-.617-.098-.775-.292a1.074 1.074 0 0 1-.235-.697ZM90.96 31l-5.132-12.151h1.403l4.02 9.837.26.753.269-.741 3.987-9.85h1.392L92.05 31h-1.09Zm14.835.225a5.536 5.536 0 0 1-2.302-.472 5.427 5.427 0 0 1-1.786-1.28 5.94 5.94 0 0 1-1.167-1.898 6.436 6.436 0 0 1-.416-2.314v-.483c0-.86.139-1.665.416-2.414a6.188 6.188 0 0 1 1.167-1.966 5.271 5.271 0 0 1 1.708-1.291 4.792 4.792 0 0 1 2.133-.483c.801 0 1.513.146 2.134.438a4.473 4.473 0 0 1 1.572 1.18 5.2 5.2 0 0 1 .966 1.785c.217.674.33 1.396.337 2.167v.82h-9.097v.37a5.8 5.8 0 0 0 .36 1.798c.209.554.505 1.044.887 1.47a4.25 4.25 0 0 0 1.359 1.045 4.13 4.13 0 0 0 1.786.382c.748.008 1.426-.13 2.032-.415a4.36 4.36 0 0 0 1.561-1.236l.843.64c-.457.644-1.067 1.165-1.831 1.561-.764.397-1.651.596-2.662.596Zm-.247-11.444c-.554 0-1.059.105-1.516.314a3.742 3.742 0 0 0-1.201.843 4.673 4.673 0 0 0-.854 1.302 5.994 5.994 0 0 0-.46 1.629h7.704v-.124c0-.494-.09-.984-.27-1.471a4.106 4.106 0 0 0-.719-1.28 3.484 3.484 0 0 0-1.145-.876c-.449-.225-.962-.337-1.539-.337Zm16.913-1.157c.33 0 .663.023 1 .067.344.038.633.094.865.169l-.18 1.303a9.69 9.69 0 0 0-.932-.158 8.166 8.166 0 0 0-.966-.056c-.569 0-1.104.068-1.606.202-.494.128-.94.33-1.336.607-.382.27-.715.61-1 1.022-.277.404-.49.887-.64 1.448l.011 7.772h-1.381V18.849h1.28l.079 1.875v.54a5.063 5.063 0 0 1 1.931-1.944c.816-.471 1.775-.704 2.875-.696Zm14.252 9.276c0-.351-.082-.659-.247-.92a2.14 2.14 0 0 0-.685-.686 4.938 4.938 0 0 0-1.179-.539c-.457-.15-.929-.277-1.415-.381a16.567 16.567 0 0 1-1.708-.438 7.213 7.213 0 0 1-1.448-.64 3.166 3.166 0 0 1-1.022-.944c-.255-.39-.382-.861-.382-1.415 0-.524.127-.992.382-1.404.262-.412.61-.764 1.044-1.056a5.029 5.029 0 0 1 1.438-.628 6.515 6.515 0 0 1 1.707-.225c.651 0 1.261.082 1.83.247a4.77 4.77 0 0 1 1.516.696 3.63 3.63 0 0 1 1.022 1.146c.255.45.393.962.416 1.538h-1.348a1.923 1.923 0 0 0-.314-1.044 2.597 2.597 0 0 0-.764-.775 3.873 3.873 0 0 0-1.1-.483 4.684 4.684 0 0 0-1.258-.168c-.412 0-.813.045-1.202.135a3.344 3.344 0 0 0-1.022.393 2.187 2.187 0 0 0-.741.662c-.18.262-.27.57-.27.921 0 .352.079.659.236.921.165.255.404.472.719.651a4.77 4.77 0 0 0 1.134.472c.442.12.902.228 1.382.326.614.127 1.197.284 1.752.471.561.18 1.055.405 1.482.674a3.25 3.25 0 0 1 1.011 1.011c.247.39.37.861.37 1.415 0 .524-.119.992-.359 1.404-.24.412-.55.752-.932 1.022a4.837 4.837 0 0 1-1.617.73 7.492 7.492 0 0 1-1.865.236c-.688 0-1.34-.087-1.954-.259a5.202 5.202 0 0 1-1.594-.73 3.518 3.518 0 0 1-1.101-1.134 3.223 3.223 0 0 1-.427-1.516h1.337c.045.48.187.88.426 1.202.247.322.551.576.91.763a3.8 3.8 0 0 0 1.146.416c.426.075.846.112 1.257.112.532 0 1.034-.064 1.505-.19.472-.136.88-.334 1.224-.596a1.96 1.96 0 0 0 .517-.607 1.61 1.61 0 0 0 .191-.786Zm5.649-9.051H148v10.95h4.133V31h-9.77v-1.202h4.301V20.05h-4.301v-1.2Zm3.908-3.325c0-.142.019-.277.056-.404a.844.844 0 0 1 .191-.337.757.757 0 0 1 .315-.202c.127-.052.277-.079.449-.079s.322.027.449.08a.68.68 0 0 1 .303.201.86.86 0 0 1 .202.326c.045.127.068.266.068.415 0 .27-.083.502-.247.697-.165.194-.423.292-.775.292-.36 0-.618-.098-.775-.292a1.075 1.075 0 0 1-.236-.697Zm8.906 9.22c0-.823.123-1.605.37-2.346a5.892 5.892 0 0 1 1.067-1.943 5.114 5.114 0 0 1 1.696-1.337c.666-.33 1.426-.494 2.28-.494.846 0 1.602.165 2.268.494.674.33 1.247.771 1.719 1.325a6.152 6.152 0 0 1 1.055 1.954 7.59 7.59 0 0 1 .382 2.348v.37a7.582 7.582 0 0 1-.382 2.347 5.872 5.872 0 0 1-1.055 1.943 5.192 5.192 0 0 1-1.696 1.325c-.666.33-1.423.495-2.269.495-.853 0-1.617-.161-2.291-.483a4.968 4.968 0 0 1-1.696-1.337 5.793 5.793 0 0 1-1.078-1.943 7.375 7.375 0 0 1-.37-2.347v-.37Zm1.336.371c0 .644.09 1.266.27 1.865.179.598.441 1.126.786 1.583a3.89 3.89 0 0 0 1.28 1.112c.509.27 1.097.404 1.763.404.659 0 1.239-.135 1.741-.404a4.042 4.042 0 0 0 1.28-1.112 5.09 5.09 0 0 0 .764-1.583c.18-.6.273-1.22.281-1.865v-.37a6.698 6.698 0 0 0-.281-1.853 5.124 5.124 0 0 0-.775-1.584 4.006 4.006 0 0 0-1.291-1.112c-.502-.277-1.082-.415-1.741-.415-.666 0-1.25.138-1.752.415a3.92 3.92 0 0 0-1.269 1.112 4.952 4.952 0 0 0-.786 1.584 6.404 6.404 0 0 0-.27 1.853v.37ZM169.675 31V18.849h1.236l.078 2.358c.187-.352.408-.678.663-.977.254-.3.539-.558.853-.775a4.857 4.857 0 0 1 1.213-.606c.449-.15.925-.225 1.427-.225.666 0 1.254.101 1.763.303.516.202.947.498 1.291.887.352.397.618.88.798 1.45.179.568.269 1.216.269 1.942V31h-1.336v-7.771a5.446 5.446 0 0 0-.202-1.472 2.738 2.738 0 0 0-.562-1.078 2.492 2.492 0 0 0-.977-.662c-.382-.15-.839-.221-1.37-.214a3.52 3.52 0 0 0-1.314.247 4.16 4.16 0 0 0-1.123.64 3.967 3.967 0 0 0-.82.91 4.41 4.41 0 0 0-.539 1.1V31h-1.348Zm22.293-3.1a1.7 1.7 0 0 0-.247-.92 2.14 2.14 0 0 0-.685-.686 4.928 4.928 0 0 0-1.18-.539c-.456-.15-.928-.277-1.415-.381a16.612 16.612 0 0 1-1.707-.438 7.213 7.213 0 0 1-1.448-.64 3.166 3.166 0 0 1-1.022-.944c-.255-.39-.382-.861-.382-1.415 0-.524.127-.992.382-1.404.262-.412.61-.764 1.044-1.056a5.029 5.029 0 0 1 1.438-.628 6.515 6.515 0 0 1 1.707-.225c.651 0 1.261.082 1.83.247a4.77 4.77 0 0 1 1.516.696 3.63 3.63 0 0 1 1.022 1.146c.255.45.393.962.416 1.538h-1.348a1.923 1.923 0 0 0-.314-1.044 2.609 2.609 0 0 0-.764-.775 3.867 3.867 0 0 0-1.101-.483 4.672 4.672 0 0 0-1.257-.168c-.412 0-.813.045-1.202.135a3.334 3.334 0 0 0-1.022.393 2.187 2.187 0 0 0-.741.662c-.18.262-.27.57-.27.921 0 .352.079.659.236.921.165.255.404.472.719.651a4.77 4.77 0 0 0 1.134.472c.442.12.902.228 1.381.326.614.127 1.198.284 1.752.471.562.18 1.056.405 1.483.674a3.25 3.25 0 0 1 1.011 1.011c.247.39.37.861.37 1.415 0 .524-.12.992-.359 1.404-.24.412-.55.752-.932 1.022a4.847 4.847 0 0 1-1.617.73 7.492 7.492 0 0 1-1.865.236c-.689 0-1.34-.087-1.954-.259a5.219 5.219 0 0 1-1.595-.73 3.525 3.525 0 0 1-1.1-1.134 3.223 3.223 0 0 1-.427-1.516h1.337c.044.48.187.88.426 1.202.247.322.551.576.91.763.344.195.726.333 1.145.416a7.27 7.27 0 0 0 1.258.112 5.81 5.81 0 0 0 1.505-.19c.472-.136.88-.334 1.224-.596a1.96 1.96 0 0 0 .517-.607 1.61 1.61 0 0 0 .191-.786Z"
		/>
		<defs>
			<linearGradient
				id="a"
				x1={19.036}
				x2={14.579}
				y1={40.138}
				y2={19.284}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#C002DF" />
				<stop offset={1} stopColor="#C002DF" stopOpacity={0} />
			</linearGradient>
			<linearGradient
				id="b"
				x1={32.822}
				x2={32.822}
				y1={4.494}
				y2={26.635}
				gradientUnits="userSpaceOnUse"
			>
				<stop
					stopColor={props.isdark === "true" ? "#00FF38" : "#02DF33"}
				/>
				<stop offset={1} stopColor="#02DF33" stopOpacity={0} />
			</linearGradient>
			<linearGradient
				id="c"
				x1={-97.312}
				x2={310.538}
				y1={-67.312}
				y2={3.803}
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#02DF33" stopOpacity={0} />
				<stop offset={0.236} stopColor="#02DF33" stopOpacity={0} />
				<stop offset={0.296} stopColor="#08C430" />
				<stop
					offset={0.352}
					stopColor={props.isdark === "true" ? "#ADFFAC" : "#254225"}
				/>
				<stop
					offset={0.626}
					stopColor={props.isdark === "true" ? "#FFF3D4" : "#2B2822"}
				/>
				<stop offset={0.768} stopColor="#940DA8" />
				<stop offset={0.856} stopColor="#C002DF" stopOpacity={0} />
			</linearGradient>
		</defs>
	</svg>
);
export default Logo;
