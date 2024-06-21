const GenderCheckbox = () => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-primary'>Male</span>
					<input type='checkbox' className='checkbox border-primary' />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-primary'>Female</span>
					<input type='checkbox' className='checkbox border-primary' />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;