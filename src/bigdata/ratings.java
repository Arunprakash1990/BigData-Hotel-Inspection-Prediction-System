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
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
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
public class ratings
{
    private static final String COMMA_DELIMITER = ",";
    private static final String NEW_LINE_SEPARATOR = "\n";
	public static  HashMap<String, Integer> fileNames= new HashMap<String,Integer>();
	public static  TreeMap<String, Integer> rat= new TreeMap<String,Integer>();
	public static ArrayList<String> rating1=new ArrayList<String>();
	public static String hotel_id;
	public static String rating;
	public static String value;
	public static String path;
public static void main(String[] args) throws IOException
{
	//getRating();
}

public  TreeMap<String,Integer> getRating(String id) throws IOException
{
	//System.out.println(path);
	InputStream is = new FileInputStream("/Users/arunprakash/Downloads/json/"+id+".json");
	int size;

	size = is.available();

byte[] buffer = new byte[size];
is.read(buffer);
is.close();
String mResponse = new String(buffer);
FileWriter fileWriter = null;
//String fileReview="OverallCount"+hotel_id;
fileWriter = new FileWriter("/Users/arunprakash/Downloads/json/Rate"+id+".csv");
fileWriter.append("rating,count");
fileWriter.append(NEW_LINE_SEPARATOR);
JSONObject outerObject = new JSONObject(mResponse);
JSONArray jsonArray = outerObject.getJSONArray("Reviews");

for (int i = 0;i<jsonArray.length(); i++)
{
	
  JSONObject objectInArray = jsonArray.getJSONObject(i);   	
JSONObject objectRatings=objectInArray.getJSONObject("Ratings");

Iterator<?> keys = objectRatings.keys();

while( keys.hasNext() ) {
    String key = (String)keys.next();
  if(key.equals("Overall")){
	  rating1.add(objectRatings.get("Overall").toString().replaceAll(".0", ""));
	 
//System.err.println(objectRatings.get((String)keys.next()));
  }
    
}


}

rat.put("5",Collections.frequency(rating1, "5") );
rat.put("4",Collections.frequency(rating1, "4") );
rat.put("3",Collections.frequency(rating1, "3") );
rat.put("2",Collections.frequency(rating1, "2") );
rat.put("1",Collections.frequency(rating1, "1") );
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
//System.out.println(rat);
return rat;
}

}
