package bigdata;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class DateCount {
public String getDateCount (String id){
	
	String totline="{";
	String csvFile = "/Users/arunprakash/Downloads/json/DateCount"+id+".csv";
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
		if(data.size() >= 12)
		{
			int size=data.size();
			for(int i=size-12;i<size;i++)
			{
				String l=data.get(i).toString();
				totline=totline+"\"Overall Count\": "+l.split(",")[1];
				String year=l.split(",")[0];
				
				totline=totline+", \"Date\": \""+year.split("-")[1]+" "+year.split("-")[0]+"\"}, {";
			}
		}
		else
		{
			int size=data.size();
			for(int i=0;i<size;i++)
			{
			String l=data.get(i).toString();
			totline=totline+"\"Overall Count\": "+l.split(",")[1];
			String year=l.split(",")[0];
			
			totline=totline+", \"Date\": \""+year.split("-")[1]+" "+year.split("-")[0]+"\"}, {";
		}
		}
//System.out.println(totline.substring(0,totline.length()-2));
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
	}System.out.println(totline);

	return totline.substring(0,totline.length()-2);

}
}
