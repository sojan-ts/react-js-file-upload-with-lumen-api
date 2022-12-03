<?php

namespace App\Http\Controllers;

use App\Filedetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FiledetailsController extends Controller
{
    public function create(Request $request)
    {

        function generateRandomString($length = 10) {
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            return $randomString;
        }


        $destinationPath = 'profiles';
        $file = $request->file('profile');
        $finaldata = rand(10,1000000).time().date("Ymd").generateRandomString().".".$file->getClientOriginalExtension();
        $file->move($destinationPath,$finaldata);

     // $namedata = $file->getClientOriginalName();


    //     $rspdata = DB::table('filedetails')->insert([
    //         'filedata' => $finaldata
    //     ]);
    //     return $rspdata;


        $author = Filedetail::create(
            ['filedata'=>$finaldata]);

        return response()->json($author, 201);

    }

}