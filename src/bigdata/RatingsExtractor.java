package bigdata;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

public class RatingsExtractor {
	static HashMap<String,Integer> rating_features=new HashMap<String,Integer>();
	public static 	String result;
	public static void main(String[] args){
		
		//getPos("dfgh");
	}

	 public HashMap<String,Integer> getPos(String hotel_id) {

			String csvFile = "/Users/roshnaramesh/Documents/workspace/Big_data/WebContent/charisma-master/feature"+100407+".csv";
			BufferedReader br = null;
			String line = "";
			String cvsSplitBy = ",";

			try {

				br = new BufferedReader(new FileReader(csvFile));
				while ((line = br.readLine()) != null) {

				        // use comma as separator
					String[] hotel = line.split(cvsSplitBy);
		
					//System.out.println("hotel id "+hotel[0]+ "name " +hotel[1]);
		rating_features.put(hotel[0], Integer.parseInt(hotel[1]));
		
		
		//pos=Integer.parseInt(hotel[2]);
		//neg=Integer.parseInt(hotel[3]);
		//getpos(pos);
		//getneg(neg);
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
			}

			return rating_features;
		  }
	 

}
