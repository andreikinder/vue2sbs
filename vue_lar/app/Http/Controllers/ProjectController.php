<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Project;

class ProjectController extends Controller
{
	 public function create()
	 {

		$projects = Project::all();
		return view('projects.create', ['projects' => $projects]);
	 }

	 public function store(Request $resquest)
	 {
		$resquest->validate([
			'name' => 'required',
			'description' => 'required',
		]);
	
		Project::create($resquest->except( 'errors' ));

		return ['message' => 'Project created'];
	 }
}
