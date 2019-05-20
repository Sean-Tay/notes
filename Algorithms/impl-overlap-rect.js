// Given a Range, find the Magnitude.
function find_range_magnitude(r) {
	return max(r[1]-r[0],0); // Prevent Negative Magnitude
}

// Given two Ranges, find the Magnitude of their overlap.
function find_range_overlap_magnitude(r1,r2) {
	let max_left_bound = max(r1[0],r2[0]);
	let min_right_bound = min(r1[1],r2[1]);
	
	if ( max_left_bound <= min_right_bound) {
		return find_range_magnitude((max_left_bound, min_right_bound));
	}
	
	return 0;
}

// Given a Rect Obj, create an x-range and a y-range
function create_ranges_from_rect_obj(rect) {
	return (
		(rect.top_left[0],rect.top_left[0]+rect.dimensions[0]),
		(rect.top_left[1]-rect.dimensions[1],rect.top_left[1])
	);
}

function main(rect1, rect2) {
	let range_rect1 = create_ranges_from_rect_obj(rect1);
	let range_rect2 = create_ranges_from_rect_obj(rect2);
	
	return find_range_overlap_magnitude(range_rect1[0], range_rect2[0]) * find_range_overlap_magnitude(range_rect1[1], range_rect2[1]);
}
