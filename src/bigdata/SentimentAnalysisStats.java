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

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;


public class SentimentAnalysisStats {
	private static final String DELIMITER=",";
	private static final String COMMA_DELIMITER = "\t";
	    private static final String NEW_LINE_SEPARATOR = "\n";
	   // private static final String FILE_HEADER = "hotel_id,review_id,review,overall,year";
	    private static final String FILE_HEADER2 = "hotel_id	totReview	posRev	negRev";
	    private static final String FILE_HEADER1="hotel_id,totReview,posRev,negRev";
	    public static List<String> stopWordList=new ArrayList<String>();
	    public static HashMap<String,Float> ratings=new HashMap<String,Float>();
	    public static int sumOfRevs=0;
	    
   public static void main( String args[] ) throws JSONException {

		
         // To connect to mongodb server
         //MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
         // Now connect to your databases
        // DB db = mongoClient.getDB( "test" );
         try {
        	String sline;
     		FileReader fr=new FileReader("stopwords.txt");
     		BufferedReader br=new BufferedReader(fr);
     		while((sline=br.readLine())!=null)
     		{
     			sline=sline.trim();
     			stopWordList.add(sline);
     		}
        	 String directory = "/Users/arunprakash/Downloads/json/";
        	 File[] files = new File(directory).listFiles();
        	 int count=0;
        	
        	 FileWriter fw2=new FileWriter("stats.txt");
        	 FileWriter fw3=new FileWriter("stats.csv");
        	 fw3.append(FILE_HEADER1.toString());
        	 fw2.append(FILE_HEADER2.toString());
        	 //Add a new line separator after the header
        	 fw2.append(NEW_LINE_SEPARATOR);
        	 fw3.append(NEW_LINE_SEPARATOR);
        	 for(File file : files){
        	   if(file.isFile()){
        	     //System.out.println(file.getAbsolutePath());
        		   int totRevs=0;
			InputStream is = new FileInputStream(new File(file.getAbsolutePath()));
			File file1=new File(file.getAbsolutePath());
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
			String fileReview="Review"+hotel_id;
			
			fileWriter = new FileWriter("/Users/arunprakash/Documents/TrainingData/"+fileReview+".txt");
			            //Write the CSV file header
		    //fileWriter.append(FILE_HEADER.toString());
	        //Add a new line separator after the header
		    //fileWriter.append(NEW_LINE_SEPARATOR);
		  
			JSONObject outerObject = new JSONObject(mResponse);
		
		    JSONArray jsonArray = outerObject.getJSONArray("Reviews");
		    //JSONObject innerObject = new JSONObject("Ratings");
		    int posRevs=0; int negRevs=0;
		    for (int i = 0, size1 = jsonArray.length(); i < size1; i++)
		    {
		      JSONObject objectInArray = jsonArray.getJSONObject(i);
		     JSONObject objectRatings=objectInArray.getJSONObject("Ratings");
             String overall = (String) objectRatings.get("Overall");
		     String[] elementNames = JSONObject.getNames(objectRatings);
		      //System.out.printf("%d ELEMENTS IN CURRENT OBJECT:\n", elementNames.length);
		     
		      for (String elementName : elementNames)
		      {
		        float value = Float.parseFloat(objectRatings.getString(elementName)); 
		        ratings.put(elementName, value);
		       // System.out.println(elementName);
		       
		        Iterator<Map.Entry<String, Float>> entries = ratings.entrySet().iterator();
		        while (entries.hasNext()) 
		        {
		            Map.Entry<String, Float> entry = entries.next();
		           // System.out.println(entry.getKey()+" : "+elementName);
		        }
		        //System.out.printf("name=%s, value=%s\n", elementName, value);
		      }
		     		     String reviewID=objectInArray.get("ReviewID").toString();
		     String content=objectInArray.get("Content").toString();
		   
		     String date=objectInArray.get("Date").toString();
		    /*String year=date.substring(date.indexOf(","+1),date.indexOf("\""));
		     fileWriter.append(hotel_id);
		     fileWriter.append(COMMA_DELIMITER);
		     fileWriter.append(reviewID);
		     fileWriter.append(COMMA_DELIMITER);
		     //if(objectInArray.keySet().contains("Title")){  String title=objectInArray.get("Title").toString();
		    // fileWriter.append(title);
		    // }
*/ 			 
		     int rating=Integer.parseInt(overall.split("\\.")[0]);
		     if(rating>=3){
		    	 overall="1";
		    	 posRevs++;
		     }
		     else
		     {
		    	 overall="-1";
		    	 negRevs++;
		     }
		     if(!content.isEmpty() || !content.contains("showreview full"))
		     {
		    	 fileWriter.append(overall);
			   	 content=preprocess(content);
			     fileWriter.append(COMMA_DELIMITER);
			     fileWriter.append(content); 
			     fileWriter.append(NEW_LINE_SEPARATOR); 
		     }
		   /*  fileWriter.append(COMMA_DELIMITER);
             fileWriter.append(overall);
    	     fileWriter.append(COMMA_DELIMITER);
		     fileWriter.append(date);*/
		     

		     //System.out.println("CSV file was created successfully !!!");
		      totRevs++;
		    }
		    fw2.append(hotel_id);
		    fw2.append(COMMA_DELIMITER);
		    fw3.append(hotel_id);
		    fw3.append(DELIMITER);
		    String total=Integer.toString(totRevs);
		    fw2.append(total);
		    fw2.append(COMMA_DELIMITER);
		    fw3.append(total);
		    fw3.append(DELIMITER);
		    String totalPos=Integer.toString(posRevs);
		    fw2.append(totalPos);
		    fw2.append(COMMA_DELIMITER);
		    fw3.append(totalPos);
		    fw3.append(DELIMITER);
		    String totalNeg=Integer.toString(negRevs);
		    fw2.append(totalNeg);
		    fw2.append(NEW_LINE_SEPARATOR);
		    fw3.append(totalNeg);
		    fw3.append(NEW_LINE_SEPARATOR);
		    try {
		fileWriter.flush();
		fileWriter.close();
		    } catch (IOException e) {
		    	//System.out.println("Error while flushing/closing fileWriter !!!");
e.printStackTrace();
}
		    sumOfRevs=sumOfRevs+totRevs;
		    System.out.println(count++);
         }
        	   }
        	 System.out.println("total:"+sumOfRevs);
        	 fw2.flush();
        	 fw2.close();
        	 fw3.flush();
        	 fw3.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
     
    
   }
   
   public static String preprocess(String content)
	{
		//Remove HTML tags
		content=content.replaceAll("\\<[^>]*>","");
		
		//Replace ',' with ', ' and '...' or '.' with '. '
		content=content.replaceAll("\\,", "\\, ");
		content=content.replaceAll("\\.", "\\. ");
		content=content.replaceAll("\\.{2,}", " ");
		
		//System.out.println(content);
		
		//Remove punctuations and numbers + lower case conversion
		content=content.replaceAll("[^A-Za-z\\s]"," ").toLowerCase();
		
		//Replace multiple whitespace by a single whitesapce
		content=content.replaceAll(" +", " ");
		
		//System.out.println(content);
	//split words into a list
		String[] wordArr=content.split(" ");
		List<String> wordList=new ArrayList(Arrays.asList(wordArr));
		
		//Remove single characters and stop words
		for(Iterator<String> itr=wordList.iterator();itr.hasNext();){
			String temp=itr.next();
			if(stopWordList.contains(temp))
				itr.remove();
		}
		
		//List to a string
		StringBuilder sb=new StringBuilder();
		for(String s:wordList)
			sb.append(s+" ");
		
		return sb.toString().trim();
		
		}

}

