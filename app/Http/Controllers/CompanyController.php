<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyRequest;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{

   public function index()
   {

       $user = Auth::user();

       return response()->json($user->companies);
   }

   public function create(CompanyRequest $request)
   {

       $user = Auth::user();
       $newCompany = new Company(['name' => trim($request->name)]);

       $user->companies()->save($newCompany);

       return response()->json([]);
   }


   public function show(Company $company)
   {

   }

   public function edit(Company $company)
   {


   }

   public function update(Company $company)
   {



   }

   public function destroy(Company $company)
   {
       $user = Auth::user();

       if ($user && $user->id === $company->user_id) {
           $company->delete();
       }

   }

}
