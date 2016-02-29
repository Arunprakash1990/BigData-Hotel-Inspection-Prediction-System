package bigdata;
import com.mongodb.MongoClient;
import com.mongodb.MongoException;
import com.mongodb.WriteConcern;
//import com.mongodb.client.FindIterable;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.DBCursor;
import com.mongodb.ServerAddress;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;


public class FeatureExtraction {
    private static final String COMMA_DELIMITER = ",";
    private static final String NEW_LINE_SEPARATOR = "\n";
    private static final String FILE_HEADER2 = "hotel_id	feature	rating";
    public static HashMap<String,Float> ratings=new HashMap<String,Float>();
    
    
    public static int sumOfRevs=0;
    
    public void parseJSON(String id) throws JSONException {
        
        
        // To connect to mongodb server
        //MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
        // Now connect to your databases
        // DB db = mongoClient.getDB( "test" );
        try {
        	id=id.trim();
        	 int count=0;
            /*String directory = "/Users/arunprakash/Downloads/json/";
            File[] files = new File(directory).listFiles();
           
          
            for(File file : files){
                if(file.isFile()){*/
                	TreeMap<String,Integer> dateCount=new TreeMap<String,Integer>();
                	//System.out.println(file.getAbsolutePath());
                    InputStream is = new FileInputStream("/Users/arunprakash/Downloads/json/"+id+".json");
                    File file1=new File("/Users/arunprakash/Downloads/json/"+id+".json");
                    String file2=file1.getName();
                    String hotel_id=file2.replaceFirst(".json", "");
                    int size;
                    
                    size = is.available();
                    
                    byte[] buffer = new byte[size];
                    is.read(buffer);
                    is.close();
                    String mResponse = new String(buffer);
                    //System.out.println(mResponse);
                    /*REVIEWS FILE*/
                    FileWriter fileWriter = null;
                    String fileReview="DateCount"+hotel_id;
                    
                    fileWriter = new FileWriter("/Users/arunprakash/Downloads/json/"+fileReview+".csv");
                   fileWriter.append("date,count");
                    fileWriter.append(NEW_LINE_SEPARATOR);
                    JSONObject outerObject = new JSONObject(mResponse);
                    
                    JSONArray jsonArray = outerObject.getJSONArray("Reviews");
                  
                    for (int i = 0, size1 = jsonArray.length(); i < size1; i++)
                    {
                        JSONObject objectInArray = jsonArray.getJSONObject(i);
                        JSONObject objectRatings=objectInArray.getJSONObject("Ratings");
                        String overall = (String) objectRatings.get("Overall");
                        String[] elementNames = JSONObject.getNames(objectRatings);
                        
                        for (String elementName : elementNames)
                        {
                            float value = Float.parseFloat(objectRatings.getString(elementName));
                            ratings.put(elementName, value);
                            
                            Iterator<Map.Entry<String, Float>> entries = ratings.entrySet().iterator();
                            while (entries.hasNext())
                            {
                                Map.Entry<String, Float> entry = entries.next();
                            }
                        }
                        
                        String date=objectInArray.get("Date").toString();
                       // System.out.println("origDate: "+date);
                        int rating=Integer.parseInt(overall.split("\\.")[0]);
                        String tempdate[]=date.split(",");
                        String month=tempdate[0].replaceAll("[0-9]", "").trim();
                        date=tempdate[1].trim()+"-"+month;
                       // System.out.println("modDate: "+date);
                        int val=0;
                        if(rating<3)
                        {
                        	if(!dateCount.containsKey(date))
                        	{
                        		dateCount.put(date, 1);
                        		//System.out.println("new one:"+date);
                        	}
                        	else
                        	{
                        		//System.out.println("enters");
                        		val=(Integer)dateCount.get(date);
                        		dateCount.put(date, val+1);
                        		//System.out.println("old one:"+date+ " "+val+1);
                        	}
                        		
                        }
                  
                    }
                    if(!dateCount.isEmpty())
                    {
                    	Iterator<Map.Entry<String, Integer>> entries = dateCount.entrySet().iterator();
                        while (entries.hasNext())
                        {
                            Map.Entry<String, Integer> entry = entries.next();
                         //   System.out.println(entry.getKey() + " = " + entry.getValue());
                            fileWriter.append(entry.getKey());
                            fileWriter.append(COMMA_DELIMITER);
                            fileWriter.append(Integer.toString(entry.getValue()));
                            fileWriter.append(NEW_LINE_SEPARATOR);
                        }
                    	
                    }
                    System.out.println(count++);
                    
                    try {
                        fileWriter.flush();
                        fileWriter.close();
                    } catch (IOException e) {
                        //System.out.println("Error while flushing/closing fileWriter !!!");
                        e.printStackTrace();
                    }
                   
       
       	 
           
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
        
    }
  
}

