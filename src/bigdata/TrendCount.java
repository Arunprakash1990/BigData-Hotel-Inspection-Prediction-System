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
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.Formatter;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;
import java.text.DateFormatSymbols;
import javax.jws.Oneway;

import org.json.JSONArray;
import org.json.JSONObject;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
public class TrendCount
{
		public static String hotel_id;
	static ArrayList<Float> rating=new ArrayList<Float>();
	static ArrayList<String> date1=new ArrayList<String>();
	public static int value;
	public static String date_encode;
public static void main(String[] args) throws IOException, ParseException
{
	//getRateCount("100407");
	//getDate();
//getTrend();
}
/*public static ArrayList<String> getDate() throws IOException, ParseException
{
	InputStream is = new FileInputStream("/Users/roshnaramesh/Downloads/json/100407.json");
	int size;

	size = is.available();

byte[] buffer = new byte[size];
is.read(buffer);
is.close();
String mResponse = new String(buffer);
JSONObject outerObject = new JSONObject(mResponse);
JSONArray jsonArray = outerObject.getJSONArray("Reviews");

for (int i = 0, size1 = jsonArray.length(); i < size1; i++)
{
	ObjectMapper mapper = new ObjectMapper();
  JSONObject objectInArray = jsonArray.getJSONObject(i);   	
if(objectInArray.keySet().contains("Date"))
{
String Date=objectInArray.getString("Date");
String d[]=Date.split(" ");
Date date = new SimpleDateFormat("MMMM").parse(d[0]);//put your month name here
Calendar cal = Calendar.getInstance();
cal.setTime(date);
int monthNumber=cal.get(Calendar.MONTH);
monthNumber=monthNumber+1;

date_encode=d[2]+"-"+monthNumber+"-"+d[1].replaceAll("[^a-zA-Z0-9]", "")+"T00:00:00.000Z";
date1.add(date_encode);

}

}
System.out.println(date1);
return date1;
}
public static ArrayList<Float> getTrend() throws IOException, ParseException
{
	InputStream is = new FileInputStream("/Users/roshnaramesh/Downloads/json/2514498.json");
	int size;

	size = is.available();

byte[] buffer = new byte[size];
is.read(buffer);
is.close();
String mResponse = new String(buffer);
JSONObject outerObject = new JSONObject(mResponse);
JSONArray jsonArray = outerObject.getJSONArray("Reviews");

for (int i = 0, size1 = jsonArray.length(); i < size1; i++)
{
	
  JSONObject objectInArray = jsonArray.getJSONObject(i);   	
JSONObject objectRatings=objectInArray.getJSONObject("Ratings");

Iterator<?> keys = objectRatings.keys();

while( keys.hasNext() ) {
    String key = (String)keys.next();
  if(key.equals("Overall")){
	  rating.add(Float.parseFloat((String) objectRatings.get("Overall")));
//System.err.println(objectRatings.get((String)keys.next()));
  }
  
}


}
System.out.println(rating);

return rating;
}*/

public  String getRateCount (String id){
	
	String totline="{";
	String csvFile = "/Users/roshnaramesh/Downloads/json/Rate"+id+".csv";
	BufferedReader br = null;
	String line = "";
	String cvsSplitBy = ",";

	try {

List data=new ArrayList();
		br = new BufferedReader(new FileReader(csvFile));
		br.readLine();
		while ((line = br.readLine()) != null) {
			data.add(line);
		        // use comma as separator
		}
		
			int size=data.size();
			for(int i=0;i<size;i++)
			{
			String l=data.get(i).toString();
			totline=totline+"\"Count\": "+l.split(",")[1];
			System.out.println(totline);
			String year=l.split(",")[0];
			System.out.println(year);
			totline=totline+", \"Rating\": \""+year+"\"}, {";
		
		}

	} catch (FileNotFoundException e) {
		e.printStackTrace();
	} catch (IOException e) {
		e.printStackTrace();
	} finally {
		if (br != null) {
			try {
				br.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}//System.out.println(totline);
	System.out.println(totline.substring(0,totline.length()-3));
	return totline.substring(0,totline.length()-3);

}
}

