package bigdata;
import com.mongodb.MongoClient;
import com.mongodb.MongoException;
import com.mongodb.WriteConcern;
import com.mongodb.DB;
import com.mongodb.DBCollection;

import com.google.gson.stream.JsonWriter;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.DBCursor;
import com.mongodb.ServerAddress;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeMap;

import javax.jws.Oneway;

import org.json.JSONArray;
import org.json.JSONObject;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
public class getRatings
{
	public static  HashSet<String> fileNames= new HashSet<String>();
	public static  HashMap<String, Integer> rat= new HashMap<String,Integer>();
	public static String hotel_id;
	public static String rating;
    private static final String COMMA_DELIMITER = ",";
    private static final String NEW_LINE_SEPARATOR = "\n";
	public static String value;
	public static ArrayList<String> rating1=new ArrayList<String>();
public static void main(String args[]) throws JsonParseException, JsonMappingException, IOException {
	//ratings("100407");
}
public static HashMap<String,Integer> ratings(String id) throws JsonParseException, JsonMappingException, IOException
{

	InputStream is = new FileInputStream("/Users/arunprakash/Downloads/json/"+id+".json");
File file1=new File("/Users/arunprakash/Downloads/json/"+id+".json");
	String file2=file1.getName();
	hotel_id=file2.replaceFirst(".json", "");
	int size;

		size = is.available();

	byte[] buffer = new byte[size];
	is.read(buffer);
	is.close();
	String mResponse = new String(buffer);
	FileWriter fileWriter = null;
	//String fileReview="OverallCount"+hotel_id;
	fileWriter = new FileWriter("/Users/arunprakash/Downloads/json/feature100407.csv");
	fileWriter.append("rating,count");
	fileWriter.append(NEW_LINE_SEPARATOR);

	JSONObject outerObject = new JSONObject(mResponse);
	
	  
    JSONArray jsonArray = outerObject.getJSONArray("Reviews");
    for (int i = 0, size1 = jsonArray.length(); i < size1; i++)
    {
    	ObjectMapper mapper=new ObjectMapper();
      JSONObject objectInArray = jsonArray.getJSONObject(i);   		 
      JSONObject objectRatings=objectInArray.getJSONObject("Ratings");
      Map<String, Object> map = new HashMap<String, Object>();

		// convert JSON string to Map
		map = mapper.readValue(objectRatings.toString(), new TypeReference<Map<String, String>>(){});
		for (Map.Entry<String, Object> entry : map.entrySet()) {

		    String key = entry.getKey();
		  if(map.containsKey(key))
		  {
			 if(entry.getValue().equals(map.get(key)))
			 {
				 
		//System.out.println(key);
			fileNames.add(key);
			
				
			 }
		  }
		   //System.out.println(fileNames);
		   Iterator<String> it = fileNames.iterator();
		   while(it.hasNext()){
			   String key1 = (String)it.next();
		      System.out.println(key1);
			   Iterator<?> keys = objectRatings.keys();

			   while( keys.hasNext() ) {
			       String key_hash = (String)keys.next();
			       
			     if(key_hash.equals(key1)){
			   	  rating1.add(objectRatings.get(key1).toString().replaceAll(".0", ""));
			   //	System.out.println(key1);
			   	  rat.put(key1.replaceAll("e.g.,", "(e.g."), Integer.parseInt(objectRatings.get(key1).toString().replaceAll(".0", "")));
			   /*	rat.put("5",Collections.frequency(rating1, "5") );
			   	rat.put("4",Collections.frequency(rating1, "4") );
			   	rat.put("3",Collections.frequency(rating1, "3") );
			   	rat.put("2",Collections.frequency(rating1, "2") );
			   	rat.put("1",Collections.frequency(rating1, "1") );*/
			 // int f=(int) objectRatings.get(key1);
			  //int normalized = (f - 0) / (5 - 0);
			  //System.out.println(normalized);
			//  System.err.println(rat);
			     }
			       
			   }
		   }
		}

   		}
    

    System.err.println(rat);
  
    Iterator<Map.Entry<String, Integer>> entries = rat.entrySet().iterator();
    while (entries.hasNext())
    {
    	 Map.Entry<String, Integer> entry = entries.next();
    fileWriter.append(entry.getKey());
    fileWriter.append(COMMA_DELIMITER);
    fileWriter.append(Integer.toString(entry.getValue()));
    fileWriter.append(NEW_LINE_SEPARATOR);
    }
    try {
        fileWriter.flush();
        fileWriter.close();
    } catch (IOException e) {
        //System.out.println("Error while flushing/closing fileWriter !!!");
        e.printStackTrace();
    }
    System.out.println(rat);
    return rat;

 	
}


}