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
import java.util.NavigableMap;
import java.util.Scanner;
import java.util.TreeMap;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;


public class ReviewListExtraction {
    private static final String COMMA_DELIMITER = ",";
    private static final String NEW_LINE_SEPARATOR = "\n";
    private static final String FILE_HEADER2 = "review_id,date,content,author";
    public List reviewList=new ArrayList<String>();
    public static HashMap<String,Float> ratings=new HashMap<String,Float>();
    
    
    public static int sumOfRevs=0;
    
    public static void main( String args[] ) throws JSONException {
       // getReview("100407");
    }
    public static void getReview(String id){
        // To connect to mongodb server
        //MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
        // Now connect to your databases
        // DB db = mongoClient.getDB( "test" );
        try {
        	
            /*String directory = "/Users/Nirmal/Downloads/json/";
            File[] files = new File(directory).listFiles();*/
            int count=0;
          
          /*  for(File file : files){
                if(file.isFile()){*/
                	TreeMap<String,String> dateCount=new TreeMap<String,String>();
                	//System.out.println(file.getAbsolutePath());
                    InputStream is = new FileInputStream("/Users/roshnaramesh/Downloads/json/"+id+".json");
                    File file1=new File("/Users/roshnaramesh/Downloads/json/"+id+".json");
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
                    String fileReview="ReviewList"+hotel_id;
                    
                    fileWriter = new FileWriter("/Users/roshnaramesh/Documents/workspace/Big_data/WebContent/charisma-master/"+fileReview+".csv");
                    fileWriter.append(FILE_HEADER2);
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
                        String reviewID=objectInArray.get("ReviewID").toString();
                        String content=objectInArray.get("Content").toString();
                        String date=objectInArray.get("Date").toString();
                        
                       // System.out.println("origDate: "+date);
                        int rating=Integer.parseInt(overall.split("\\.")[0]);
                        String tempdate[]=date.split(",");
                        String month=tempdate[0].split(" ")[0].trim();
                        String day=tempdate[0].split(" ")[1].trim();
                        date=tempdate[1].trim()+"-"+day+"-"+month;
                       // System.out.println("modDate: "+date);
                        String val=null;
                        if(rating<3)
                        {	
                        	if(!dateCount.containsKey(date))
                        	{
                                dateCount.put(date, reviewID);
                        	}
                        	else
                        	{
                        		//System.out.println("enters");
                        		val=(String)dateCount.get(date);
                        		dateCount.put(date, val+"$"+reviewID);
                        		//System.out.println("old one:"+date+ " "+val+1);
                        	}
                        }
                  
                    }
                    
                    NavigableMap<String, String> nmap=dateCount.descendingMap();
                        
                        if(!dateCount.isEmpty())
                        {
                        	Iterator<Map.Entry<String, String>> entries = nmap.entrySet().iterator();
                            while (entries.hasNext())
                            {
                                Map.Entry<String, String> entry = entries.next();
                                //System.out.println(entry.getKey() + " = " + entry.getValue());
                                String revKey=entry.getKey();
                                String temp=entry.getValue();
                                String[] arr=temp.split("$");
                                for(String a:arr)
                                {
                                	for (int i = 0, size1 = jsonArray.length(); i < size1; i++)
                                {
                                    JSONObject objectInArray = jsonArray.getJSONObject(i);
                                    JSONObject objectRatings=objectInArray.getJSONObject("Ratings");
                                    
                                    String reviewID=objectInArray.get("ReviewID").toString();
                                   
                                    if(reviewID.equals(a))
                                    {
                                    	System.out.println(reviewID);
                                    	String author=objectInArray.get("Author").toString();
                                    	//String title=null;
                                    	//if(objectInArray.get("Title")!=null)
                                        //title=objectInArray.get("Title").toString();
                                        String content=objectInArray.get("Content").toString();
                                    	//title=title.replaceAll("[^\\x20-\\x7e]", "");
                                        //title=title.replaceAll("[^\\u0000-\\uFFFF]", "");
    	                                content=content.replaceAll("[^\\x20-\\x7e]", "");
    	                                content=content.replaceAll("[^\\u0000-\\uFFFF]", "");
    	                               
    	                                fileWriter.append(reviewID);
    	                                fileWriter.append(COMMA_DELIMITER);
    	                                fileWriter.append(revKey);
    	                                fileWriter.append(COMMA_DELIMITER);
    	                               // fileWriter.append(title);
    	                               // fileWriter.append(COMMA_DELIMITER);
    	                                content=content.replaceAll(",", "");
    	                                fileWriter.append(content);
    	                                fileWriter.append(COMMA_DELIMITER);
    	                                fileWriter.append(author);
    	                                fileWriter.append(NEW_LINE_SEPARATOR);
    	                             System.out.println(content);
    	                            /*    String line=reviewID+"/t"+revKey+"/t"+content+"/t"+author;
    	                                reviewList.add(line);
    	                         */
    	                                break;
                                    }
                                    else
                                    {
                                    	continue;
                                    }
	                                    	
                                    
                            }}
                        	
                        }
                  
                    }
                    
                        
                      //  System.out.println(reviewList);
                    
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
		//return reviewList;
        
        
    }
 
    
}

